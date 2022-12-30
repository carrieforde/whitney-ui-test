import * as React from "react";
import cn from "classnames";
import styles from "./form-control.module.css";

export type FormControlProps = {
  label: string;
  name: string;
  hint?: string;
  error?: boolean;
};

export const FormControl = ({
  children,
  label,
  name,
  hint,
  error,
}: React.PropsWithChildren<FormControlProps>) => {
  const formControlClassName = cn("form-control", {
    [styles.error]: error,
  });
  const labelClassName = cn("label", styles.label);
  const hintClassName = cn("hint", styles.hint);

  return (
    <div className={formControlClassName}>
      <label htmlFor={name} className={labelClassName}>
        {label}
      </label>

      {children}

      {hint && <span className={hintClassName}>{hint}</span>}
    </div>
  );
};

export default FormControl;
