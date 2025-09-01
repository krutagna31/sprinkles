import { SectionContainer, ViewContainer } from "@/components/layouts";
import { CommandBlock } from "@/components/ui";

export default function InstallationPage() {
  const commands = {
    pnpm: "pnpm dlx shadcn@latest init",
    npm: "npx shadcn@latest init",
    yarn: "yarn shadcn@latest init",
    bun: "bunx --bun shadcn@latest init",
  };
  return (
    <>
      <SectionContainer>
        <ViewContainer size="sm" className="space-y-2">
          <CommandBlock commands={commands} />
        </ViewContainer>
      </SectionContainer>
    </>
  );
}
