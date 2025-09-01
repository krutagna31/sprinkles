import { Button, Separator } from "@/components/ui";
import { Icons } from "@/components/helpers";
import { Clipboard } from "lucide-react";

interface CodeBlockProps {
  filename: string;
  language: string;
  code: string;
}

function CodeBlock({ filename, language, code }: CodeBlockProps) {
  return (
    <div className="bg-muted rounded-md">
      <div className="flex items-center justify-between pl-2">
        <div className="flex items-center gap-2">
          <Icons.typescript className="size-4" />
          <p>{filename}</p>
        </div>
        <Button variant="ghost" size="icon">
          <Clipboard />
        </Button>
      </div>
      <Separator />
      <pre className="p-2">
        <code className="text-sm">{code}</code>
      </pre>
    </div>
  );
}

export { CodeBlock };
