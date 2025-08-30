import clsx from "clsx";

function ViewContainer({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={clsx(className, "max-w-7xl mx-auto px-4")} {...props}>
      {children}
    </div>
  );
}

export { ViewContainer };
