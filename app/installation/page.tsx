import { PickYourFramework } from "@/app/installation/_components/pick-your-framework";
import { PageIntro } from "@/components/sections";

export default function InstallationPage() {
  return (
    <>
      <PageIntro
        title="Installation"
        description="How to install dependencies and structure your app"
      />
      <PickYourFramework />
    </>
  );
}
