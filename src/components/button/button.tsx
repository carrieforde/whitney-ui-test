import * as React from "react";

export type ButtonProps = {
  type?: "submit" | "button" | "reset";
} & React.HTMLProps<HTMLButtonElement>;

export const Button = ({
  children,
  type = "button",
  ...props
}: React.PropsWithChildren<ButtonProps>) => (
  <button {...props} type={type}>
    {children}
  </button>
);

export default Button;
