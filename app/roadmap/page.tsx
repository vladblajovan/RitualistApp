import RoadmapPage, { roadmapMetadata } from '../components/RoadmapPage';

export const metadata = roadmapMetadata('en');

export default function Page() {
  return <RoadmapPage locale="en" />;
}
