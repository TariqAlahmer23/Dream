import { SlideFrame } from "./SlideFrame"
import { TimelineLayout } from "./layouts/TimelineLayout"
import { RoadmapTimeline } from "./diagrams/RoadmapTimeline"

export function RoadmapSlide({ content, isRtl }: { content: any; isRtl: boolean }) {
  const phases = content.roadmap.steps.map((s: any, i: number) => ({ phase: `${i + 1}`, title: s.title, description: "", track: s.track }))
  return (
    <SlideFrame eyebrow="13" title={content.roadmap.title} isRtl={isRtl}>
      <TimelineLayout>
        <RoadmapTimeline phases={phases} isRtl={isRtl} nowLabel={content.roadmap.now} laterLabel={content.roadmap.later} />
      </TimelineLayout>
    </SlideFrame>
  )
}
