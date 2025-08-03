import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string;
  description?: string;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-xl border border-transparent bg-white p-4 shadow-md transition-all hover:shadow-lg dark:border-white/[0.1] dark:bg-black",
        className
      )}
    >
      <div className="relative mb-4 h-full w-full overflow-hidden rounded-lg">
        {header}
      </div>

      <div className="z-10">
        {icon && (
          <div className="mb-2 flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-semibold text-black dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>
    </div>
  );
};
