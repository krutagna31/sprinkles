import { SectionContainer, ViewContainer } from "@/components/layouts";
import { Button } from "@/components/ui";
import Link from "next/link";

export default function HomePage() {
  return (
    <SectionContainer>
      <ViewContainer className="!max-w-4xl space-y-6 text-center">
        <h1 className="text-4xl font-bold">
          The Foundation for your Design System
        </h1>
        <p className="text-lg">
          A set of beautifully designed components that you can customize,
          extend, and build on. Start here then make it your own. Open Source.
          Open Code.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/installation">Get Started</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/">View Components</Link>
          </Button>
        </div>
      </ViewContainer>
    </SectionContainer>
  );
}
