#!/usr/bin/env node
// Validates the User Guide content and its revision history:
// - every language has the same sections and items (same keys, order, colors, emojis)
// - no empty strings and no duplicate keys
// - every section color has a matching accent in page.tsx
// - CHANGELOG.md entries are well-formed and newest-first
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const guideDir = join(root, 'app', 'user-guide');
const LANGS = ['en', 'de', 'es', 'fr', 'ro'];
const errors = [];

const content = JSON.parse(readFileSync(join(guideDir, 'content.json'), 'utf8'));
const page = readFileSync(join(guideDir, 'page.tsx'), 'utf8');
const changelog = readFileSync(join(guideDir, 'CHANGELOG.md'), 'utf8');

const nonEmpty = (value, where) => {
  if (typeof value !== 'string' || value.trim() === '') errors.push(`${where}: missing or empty`);
};

const extraLangs = Object.keys(content).filter((lang) => !LANGS.includes(lang));
if (extraLangs.length) errors.push(`Unexpected languages: ${extraLangs.join(', ')}`);

const reference = content.en;
for (const lang of LANGS) {
  const bundle = content[lang];
  if (!bundle) {
    errors.push(`${lang}: language missing`);
    continue;
  }

  for (const uiKey of Object.keys(reference.ui)) nonEmpty(bundle.ui?.[uiKey], `${lang}.ui.${uiKey}`);

  if (bundle.sections.length !== reference.sections.length) {
    errors.push(`${lang}: has ${bundle.sections.length} sections, en has ${reference.sections.length}`);
  }

  const itemKeys = new Set();
  bundle.sections.forEach((section, sIdx) => {
    const refSection = reference.sections[sIdx];
    const where = `${lang}.sections[${sIdx}]`;
    if (!refSection) return;
    if (section.key !== refSection.key) errors.push(`${where}: key "${section.key}" != en "${refSection.key}"`);
    if (section.color !== refSection.color) errors.push(`${where}: color differs from en`);
    if (!page.includes(`  ${section.color}: {`)) errors.push(`${where}: no accent for color "${section.color}" in page.tsx`);
    nonEmpty(section.title, `${where}.title`);

    if (section.items.length !== refSection.items.length) {
      errors.push(`${where} (${section.key}): has ${section.items.length} items, en has ${refSection.items.length}`);
    }
    section.items.forEach((item, iIdx) => {
      const refItem = refSection.items[iIdx];
      const itemWhere = `${lang}.${section.key}[${iIdx}]`;
      nonEmpty(item.key, `${itemWhere}.key`);
      if (itemKeys.has(item.key)) errors.push(`${itemWhere}: duplicate item key "${item.key}"`);
      itemKeys.add(item.key);
      if (refItem && item.key !== refItem.key) errors.push(`${itemWhere}: key "${item.key}" != en "${refItem.key}"`);
      if (refItem && item.emoji !== refItem.emoji) errors.push(`${itemWhere} (${item.key}): emoji differs from en`);
      for (const field of ['emoji', 'title', 'subtitle', 'content']) nonEmpty(item[field], `${itemWhere}.${field}`);
    });
  });
}

// Changelog: "## [MAJOR.MINOR.PATCH] - YYYY-MM-DD", newest first.
const entries = [...changelog.matchAll(/^## \[(\d+)\.(\d+)\.(\d+)\] - (\d{4}-\d{2}-\d{2})$/gm)];
const looseHeadings = [...changelog.matchAll(/^## \[.*$/gm)];
if (entries.length === 0) errors.push('CHANGELOG.md: no "## [x.y.z] - YYYY-MM-DD" entries');
if (looseHeadings.length !== entries.length) errors.push('CHANGELOG.md: malformed version heading');

const compare = (a, b) => a[1] - b[1] || a[2] - b[2] || a[3] - b[3];
for (let i = 0; i < entries.length; i++) {
  const [, , , , date] = entries[i];
  if (Number.isNaN(Date.parse(`${date}T00:00:00Z`))) errors.push(`CHANGELOG.md: invalid date ${date}`);
  if (i > 0) {
    const newer = entries[i - 1].slice(1, 4).map(Number);
    const older = entries[i].slice(1, 4).map(Number);
    if (compare([0, ...newer], [0, ...older]) <= 0) {
      errors.push(`CHANGELOG.md: ${newer.join('.')} must be newer than ${older.join('.')}`);
    }
    if (entries[i - 1][4] < date) errors.push(`CHANGELOG.md: ${newer.join('.')} is dated before ${older.join('.')}`);
  }
}

if (errors.length) {
  console.error(`User Guide check failed (${errors.length}):`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

const itemCount = reference.sections.reduce((sum, section) => sum + section.items.length, 0);
const latest = entries[0];
console.log(
  `User Guide OK: v${latest[1]}.${latest[2]}.${latest[3]} (${latest[4]}), ` +
    `${reference.sections.length} sections, ${itemCount} items, ${LANGS.length} languages.`,
);
