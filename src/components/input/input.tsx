import * as React from "react";
import cn from "classnames";
import { useFormControl } from "components/form-control/form-control";
import styles from "./input.module.css";

export type InputProps = React.HTMLProps<HTMLInputElement> & {
  /**
   * @param name
   *
   * Name is **required** when the Input is _not_ wrapped with a FormControl!
   */
  name?: string;
  error?: boolean;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, name, ...props }, ref) => {
    const formControlContext = useFormControl();

    if (!formControlContext.name && !name) {
      throw new Error("`name` must be provided when not using a FormControl!");
    }

    const classes = cn("input", styles.input, {
      [styles.error]: formControlContext.error || error,
    });

    return (
      <input
        {...props}
        name={formControlContext.name || name}
        className={classes}
        ref={ref}
      />
    );
  }
);

export default Input;
