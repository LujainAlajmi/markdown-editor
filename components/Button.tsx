import React from "react";
import clsx from "clsx";
export default function Button({
  children,
  icon,
  onClick,
  className,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  const classes = clsx(
    className,
    "flex flex-row items-center justify-center bg-[#E46643] rounded hover:bg-[#F39765]",

    {
      "w-[40px] h-[40px]   sm:w-[152px] sm:h-[40px] sm:space-x-2":
        icon !== undefined,
    },
    {
      " h-[40px] w-full": icon === undefined,
    }
  );
  return (
    <button type="button" className={classes} onClick={onClick}>
      {icon !== undefined && (
        <>
          <div className="block">{icon}</div>
          <div className="hidden sm:block">{children}</div>
        </>
      )}
      {icon === undefined && <>{children}</>}
    </button>
  );
}
