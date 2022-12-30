import * as React from "react";
import cn from "classnames";
import styles from "./button.module.css";

type ButtonComponent = "button" | "a";
type ButtonColor = "default" | "primary" | "secondary" | "error";
type ButtonVariant = "text" | "outline" | "filled";

export type ButtonProps<T = HTMLButtonElement> = {
  color?: ButtonColor;
  variant?: ButtonVariant;
  component?: ButtonComponent;
  href?: string;
  buttonRef?: React.Ref<HTMLButtonElement | HTMLAnchorElement>;
  type?: "button" | "reset" | "submit";
} & React.HTMLProps<T>;

type BaseButtonProps = React.HTMLProps<HTMLButtonElement>;

const BaseButton = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<
    BaseButtonProps & {
      type?: "button" | "reset" | "submit";
      className: string;
    }
  >
>(({ children, className, type = "button", ...props }, ref) => (
  <button {...props} className={className} type={type} ref={ref}>
    {children}
  </button>
));

const BaseAnchorButton = React.forwardRef<
  HTMLAnchorElement,
  React.PropsWithChildren<{ href: string; className: string }>
>(({ children, className, href, ...props }, ref) => (
  <a {...props} className={className} href={href} ref={ref}>
    {children}
  </a>
));

export const Button = ({
  children,
  color = "default",
  variant = "text",
  component = "button",
  href,
  buttonRef,
  ...props
}: React.PropsWithChildren<ButtonProps>) => {
  const classNames = cn("button", styles.button, {
    [styles[variant]]: !!variant && styles[variant],
    [styles[color]]: !!color && styles[color],
  });

  if (component === "a") {
    if (!href) {
      throw new Error("Links as buttons require an `href` prop!");
    }

    return (
      <BaseAnchorButton
        {...props}
        className={classNames}
        href={href}
        ref={buttonRef as React.Ref<HTMLAnchorElement>}
      >
        {children}
      </BaseAnchorButton>
    );
  }

  return (
    <BaseButton
      {...props}
      className={classNames}
      ref={buttonRef as React.Ref<HTMLButtonElement>}
    >
      {children}
    </BaseButton>
  );
};

export default Button;
