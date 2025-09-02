import { SectionContainer, ViewContainer } from "@/components/layouts";

interface PageIntroProps {
  title: string;
  description: string
}

function PageIntro({ title, description }: PageIntroProps) {
  return (
    <SectionContainer>
      <ViewContainer className="space-y-4">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </ViewContainer>
    </SectionContainer>
  )
}

export { PageIntro };