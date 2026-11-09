# User Guide Changelog

Revision history for the in-app User Guide (`content.json`, served at
`/user-guide/`). This file is internal: it is not rendered on the website and
users only ever see the latest content.

## How to record a revision

1. Edit `content.json` in **all five languages** (en, de, es, fr, ro). Every
   language must have the same sections and items, in the same order, with the
   same `key`s.
2. Add a new entry at the top of this file:
   `## [MAJOR.MINOR.PATCH] - YYYY-MM-DD`, followed by the app version it was
   checked against and `Added` / `Changed` / `Removed` lists that name the
   affected items by `sectionKey/itemKey`.
3. Run `npm run check:user-guide` before committing.

Versioning:

- **MAJOR** — the guide is restructured or rewritten (sections added, removed,
  or reorganized).
- **MINOR** — items are added or removed, or an item's meaning changes because
  the app changed.
- **PATCH** — wording, translation, or typo fixes with no change in meaning.

Item `key`s are stable identifiers. Keep a key when an item is reworded; use a
new key when an item is replaced by something different.

## [3.1.0] - 2026-11-09

Checked against Ritualist 2.0 (main, the hero picker's speech bubbles).

### Changed

- `timedHabits/fastingGuide`: the Fasting Guide has two tabs, Now (with Around Now) and The Whole Fast; What to Expect previews The Whole Fast.
- `timedHabits/fastingCoach`: the six coaches are plush toys with their three traits each, introduce themselves in a speech bubble as you swipe; "Taisu is free. The other coaches come with Pro."

## [3.0.0] - 2026-11-09

Checked against Ritualist 2.0 as it ships (Ritualist main at c32b4631, with
the Taisu hero and the Lifetime plan from their threads). Sections reorganized
around the four tabs, French now uses "tu" as the app does, and every button
name is the app's own in each language.

### Added

- `challenges` section (amber): `challenges/challenges` (moved from `insights`,
  rewritten for the Challenges tab, Bronze/Silver/Gold and lifetime paths),
  `challenges/achievements` and `challenges/shareCards` (moved from `insights`).
- `gettingStarted/firstSteps` (onboarding), `gettingStarted/measureHabits`,
  `gettingStarted/timeOfDay`.
- `timedHabits/fastingGuide`, `timedHabits/fastingCoach` (the six heroes, Taisu free).
- `reminders/myPlaces`.
- `insights/aboutYouPrivacy` (consent, on-device, the lock).
- `healthAndConnectivity/siriShortcuts` (Siri phrases, Shortcuts, Spotlight, controls).
- `personalize/quickAccess`, `personalize/assistants`.

### Changed

- `gettingStarted/appTour`: four tabs (Home, Challenges, For You, Settings) and ✦.
- `gettingStarted/trackingTypes`: Check, Count, Measure, Timer.
- `gettingStarted/scheduling`: Custom schedules, repeats, and goals per week or month.
- `gettingStarted/freeAndPro`: the current Free/Pro split; Monthly $9.99, Annual
  $49.99 with a 1-week trial, Lifetime $99.99 once; Weekly removed.
- `gettingStarted/habitsGallery`, `createHabit`, `categories`: current gallery and editor.
- All of `trackingHabits`: row controls with undo, Log and Stats pages, customizable
  swipe actions, period streaks, Manage Habits and pausing.
- All of `timedHabits`: Last bite, Stop/Finish, phase alerts, breathing shapes and
  past-target sessions, Live Activities without Finish, reports and moods.
- `reminders` renamed "Reminders & Places"; `locationReminders` covers days, time of
  day, and how often.
- `insights` renamed "For You & Insights"; `youTab`, `patterns`, `history`, `aboutYou`
  rewritten for 2.0.
- `healthAndConnectivity/appleHealth`: any habit links to a measure; regional units.
- `healthAndConnectivity/icloudSync`, `appleWatch`, `widgets`, `dataManagement`.
- `personalize` renamed "Make It Yours"; `preferences` is now General; `customizeHome`,
  `profile` (with Your Goals) and `timezone` follow the new Settings.
- `tips/twoMinRule`, `tips/helpAndFeedback`.

### Removed

- `personalize/labs`: Ritualist Labs isn't in release builds.

## [2.0.0] - 2026-09-16

Checked against Ritualist 2.0.1. Full rewrite: the previous guide predated the
2.0 redesign (Home, You tab, Habits Gallery, Settings reorganization) and
contained outdated or incorrect instructions.

### Added

- `personalize` section: `preferences`, `customizeHome`, `profile`, `timezone`, `labs`.
- `gettingStarted/appTour`, `gettingStarted/habitsGallery`, `gettingStarted/freeAndPro`.
- `trackingHabits/homeScreen`, `trackingHabits/quickActions`, `trackingHabits/manageHabit`.
- `timedHabits/fastingAlerts`, `timedHabits/sessionHistory`.
- `reminders/smartScheduling`, `reminders/notificationSettings`.
- `insights/youTab`, `insights/patterns`, `insights/history`, `insights/challenges`,
  `insights/shareCards`, `insights/aboutYou`.
- `healthAndConnectivity/dataManagement`.
- `tips/helpAndFeedback`.
- Stable `key` on every item.

### Changed

- `gettingStarted/createHabit`: habits are created from the Habits Gallery (✦) instead of a + button on a Habits tab.
- `gettingStarted/trackingTypes` (was "Binary vs Numeric Habits"): uses the app's Check off / Amount / Timed terminology.
- `gettingStarted/scheduling`: adds start dates (Active Since).
- `gettingStarted/categories`: category management now lives in the habit editor.
- `trackingHabits/logHabit`, `trackingHabits/pastDays`, `trackingHabits/streaks`: match the redesigned Home and progress sheets.
- `timedHabits/fasting`: current protocol list, Adjust Time / Adjust Goal, stages, Save & End / Discard, unfinished fasts.
- `timedHabits/breathing`: current pattern names and custom pattern fields.
- `timedHabits/liveActivities`: Live Activities are available for fasting only; adds Finish and on-device pep talks.
- `reminders/timeReminders`: reminders skip completed habits and running fasts; catch-up reminders.
- `reminders/locationReminders`: Arriving / Leaving / Both, Area Size, Notification Frequency, Always access.
- `insights/achievements`: current achievement groups and milestones.
- `healthAndConnectivity/appleHealth`: sync directions, read-only habits, history sync, Health settings page.
- `healthAndConnectivity/icloudSync`, `healthAndConnectivity/appleWatch`, `healthAndConnectivity/widgets`: current behavior and widget list.
- Section titles: `timedHabits` → "Fasting & Breathing", `insights` → "Progress & Insights",
  `healthAndConnectivity` → "Health, Sync & Devices", `tips` → "Tips & Help".

### Removed

- "Colors & Themes": completion color themes no longer exist.
- "Habits Assistant": replaced by `gettingStarted/habitsGallery`.
- "Inspiration Cards": covered by `personalize/customizeHome`.
- "Quick Log with Long Press": replaced by `trackingHabits/quickActions`.
- "Progress Trend", "Habit Patterns", "Consistency Heatmap": replaced by `insights/patterns` and `insights/history`.
- "Personality Insights": replaced by `insights/aboutYou`.
- "Data Export": replaced by `healthAndConnectivity/dataManagement`.
- "Roadmap & Feature Requests": replaced by `tips/helpAndFeedback`.

## [1.1.0] - 2026-05-10

Added five items covering features shipped since the first release: "Colors &
Themes", "Inspiration Cards", "Achievements", "Apple Watch", and "Roadmap &
Feature Requests".

## [1.0.0] - 2026-04-30

First web User Guide: seven sections (Getting Started, Tracking Habits, Timed
Habits, Reminders & Notifications, Insights & Stats, Health & Connectivity,
Tips & Tricks) in English, German, Spanish, French, and Romanian, with search
and a language switcher.
