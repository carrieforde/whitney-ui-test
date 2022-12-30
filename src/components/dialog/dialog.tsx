import * as React from "react";
import { createPortal } from "react-dom";
import cn from "classnames";
import styles from "./dialog.module.css";

export type DialogProps = {
  open: boolean;
  onClose: () => void;
};

export const Dialog = ({
  children,
  open,
  onClose,
}: React.PropsWithChildren<DialogProps>) => {
  const className = cn("dialog", styles.dialog);

  React.useEffect(() => {
    document.body.addEventListener(
      "click",
      (e: React.MouseEvent<HTMLElement>) => {
        if (e.target.classList.contains(styles.body)) {
          onClose();
        }
      }
    );

    document.body.addEventListener("keyup", (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    });

    return () => {
      document.body.removeEventListener("click", onClose);
    };
  }, []);

  React.useEffect(() => {
    if (open) {
      document.body.classList.add(styles.body);
    }

    if (!open && document.body.classList.contains(styles.body)) {
      document.body.classList.remove(styles.body);
    }
  }, [open]);

  if (!open) {
    return null;
  }

  return createPortal(
    <div className={className}>{children}</div>,
    document.body
  );
};
export default Dialog;
