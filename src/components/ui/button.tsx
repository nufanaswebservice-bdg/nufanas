import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "gradient";
  size?: "sm" | "md" | "lg" | "xl";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg":
              variant === "default",
            "border border-border bg-transparent hover:bg-primary/10 hover:border-primary":
              variant === "outline",
            "hover:bg-slate-100:bg-slate-800": variant === "ghost",
            "text-primary underline-offset-4 hover:underline": variant === "link",
            "gradient-primary text-white shadow-lg hover:shadow-xl hover:scale-[1.02]":
              variant === "gradient",
          },
          {
            "h-8 px-3 text-xs": size === "sm",
            "h-10 px-5 text-sm": size === "md",
            "h-12 px-8 text-base": size === "lg",
            "h-14 px-10 text-lg": size === "xl",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
