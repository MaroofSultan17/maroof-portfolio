import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variantStyles = {
      primary:
        "bg-primary hover:bg-primary-hover text-white shadow-sm shadow-primary/20",
      secondary:
        "bg-surface hover:bg-surface-hover text-primary border border-border",
      outline:
        "border border-border hover:border-primary/50 text-primary bg-transparent hover:bg-primary/5",
      ghost:
        "text-muted hover:text-primary hover:bg-surface",
    };

    const sizeStyles = {
      sm: "h-8 px-3 text-xs rounded-lg",
      md: "h-10 px-4 text-sm rounded-xl",
      lg: "h-12 px-6 text-base rounded-xl",
    };

    return (
      <button
        ref={ref}
        type={props.type || "button"}
        className={cn(
          "inline-flex items-center justify-center font-medium font-body transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
