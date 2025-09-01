"use client";

import { useState } from "react";
import {
  Button,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";
import { Check, Clipboard, TerminalSquare } from "lucide-react";
import { useCopyToClipboard } from "@/hooks";
import { Commands } from "@/types/shared";

interface CommandBlockProps {
  commands: Commands;
}

function CommandBlock({ commands }: CommandBlockProps) {
  const [command, setCommand] = useState<keyof Commands>("pnpm");
  const { copy, copied } = useCopyToClipboard();

  return (
    <Tabs
      defaultValue={command}
      onValueChange={(value) => setCommand(value as keyof Commands)}
      className="rounded-md bg-zinc-900"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 px-2">
          <TerminalSquare size="16" />
          <TabsList className="bg-inherit">
            {Object.keys(commands).map((key) => (
              <TabsTrigger key={key} value={key}>
                {key}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <Button
          variant="ghost"
          size="icon"
          aria-label={
            copied ? "copied to clipboard" : "copy command to clipboard"
          }
          onClick={() => {
            copy(commands[command]);
          }}
        >
          {copied ? <Check /> : <Clipboard />}
        </Button>
      </div>
      <Separator />
      {Object.entries(commands).map(([key, value]) => (
        <TabsContent className="p-2 text-sm" key={key} value={key}>
          <pre>
            <code>{value}</code>
          </pre>
        </TabsContent>
      ))}
    </Tabs>
  );
}

export { CommandBlock };
