import React from "react";
import clsx from "clsx";
export default function Typography({
  children,
  className,
  type,
}: {
  children: React.ReactNode;
  className?: string;
  type?:
    | "body"
    | "heading-medium"
    | "heading-small"
    | "code"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "p2";
}) {
  const classes = clsx(className, {
    "font-sans text-[15px]": type === "heading-medium",
    "font-sans text-sm tracking-[2px]": type === "heading-small",
    "font-sans text-[13px] font-light": type === "body",
    "font-serif text-[32px] font-bold": type === "h1",
    "font-serif text-[28px] font-light": type === "h2",
    "font-serif text-[24px] font-bold": type === "h3",
    "font-serif text-[20px] font-bold": type === "h4",
    "font-serif text-[16px] font-bold": type === "h5",
    "font-serif text-[14px] font-bold text-[#E46643]": type === "h6",
    "font-serif text-[14px] leading-[24px]": type === "p",
    "font-serif text-[14px] font-bold leading-[24px]": type === "p2",
    "font-mono text-[14px] leading-[24px]": type === "code",
  });
  return <h1 className={classes}>{children}</h1>;
}
