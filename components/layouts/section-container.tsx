import clsx from "clsx";

function SectionContainer({
  children,
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={clsx(className, "py-6")} {...props}>
      {children}
    </section>
  );
}

export { SectionContainer };
