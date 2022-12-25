import * as React from "react";
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
}: React.PropsWithChildren<FormControlProps>) => (
  <div className={error ? styles.error : undefined}>
    <label htmlFor={name} className={styles.label}>
      {label}
    </label>

    {children}

    {hint && <span className={styles.hint}>{hint}</span>}
  </div>
);

export default FormControl;
