import * as React from "react";
import cn from "classnames";
import styles from "./input.module.css";

export type InputProps = React.HTMLProps<HTMLInputElement> & {
  name: string;
  error?: boolean;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, name, ...props }, ref) => {
    const classes = cn("input", styles.input, { [styles.error]: error });
    return <input {...props} name={name} className={classes} ref={ref} />;
  }
);

export default Input;
