import type { Meta, Story } from "@storybook/react";
import Input from "components/input/input";
import FormControlComp, { FormControlProps } from "./form-control";

export default {
  title: "Forms/FormControl",
  component: FormControlComp,
} as Meta;

export const FormControl: Story<FormControlProps> = (args) => (
  <FormControlComp
    {...args}
    label="First Name"
    name="firstName"
    hint="This is your name"
    error
  >
    <Input name="firstName" error />
  </FormControlComp>
);
