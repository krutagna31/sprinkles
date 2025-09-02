import { SectionContainer, ViewContainer } from "@/components/layouts";
import { Card, CardContent, CardTitle } from "@/components/ui";
import { frameworks } from "@/app/installation/_content";
import Link from "next/link";

function PickYourFramework() {
  return (
    <SectionContainer>
      <ViewContainer className="space-y-4">
        <h2 className="text-xl">Pick Your Framework</h2>
        <p>
          Start by selecting your framework of choice. Then follow the
          instructions to install the dependencies and structure your app.
          shadcn/ui is built to work with all React frameworks.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {frameworks.map(({ title, href, Icon }) => (
            <Link key={title} href={href}>
              <Card>
                <CardContent className="mx-auto">
                  <Icon className="size-16" />
                </CardContent>
                <CardTitle className="text-center">{title}</CardTitle>
              </Card>
            </Link>
          ))}
        </div>
      </ViewContainer>
    </SectionContainer>
  );
}

export { PickYourFramework };
