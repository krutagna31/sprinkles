import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const containerVariants = cva("mx-auto px-4", {
  variants: {
    size: {
      default: "max-w-5xl",
      sm: "max-w-3xl",
      lg: "max-w-7xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

function ViewContainer({
  children,
  className,
  size,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof containerVariants>) {
  return (
    <div className={cn(containerVariants({ className, size }))} {...props}>
      {children}
    </div>
  );
}

export { ViewContainer };
