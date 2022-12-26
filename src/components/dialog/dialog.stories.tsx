import type { Meta, Story } from "@storybook/react";
import * as React from "react";
import { Button, FormControl, Input, Typography } from "components";
import DialogComp from "./dialog";

export default {
  title: "Dialog",
  component: DialogComp,
} as Meta;

interface NewUserForm {
  firstName: string;
  email: string;
}

export const Dialog: Story = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [isOpen, setIsOpen] = React.useState(false);
  const [, setValues] = React.useState<NewUserForm>({
    firstName: "",
    email: "",
  });

  const onClose = () => setIsOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  React.useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <>
      <Button
        variant="filled"
        color="primary"
        onClick={() => setIsOpen((s) => !s)}
      >
        Open Dialog
      </Button>
      <DialogComp open={isOpen} onClose={onClose}>
        <Typography component="h2" variant="subtitle">
          New User Registration
        </Typography>

        <form onSubmit={handleSubmit}>
          <FormControl name="firstName" label="First Name">
            <Input name="firstName" onChange={handleChange} ref={inputRef} />
          </FormControl>

          <FormControl name="email" label="Email Address">
            <Input name="email" inputMode="email" onChange={handleChange} />
          </FormControl>

          <Button type="submit" variant="filled" color="secondary">
            Submit
          </Button>
        </form>
      </DialogComp>
    </>
  );
};
