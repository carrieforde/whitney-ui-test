import type { Meta, Story } from "@storybook/react";
import Input from "components/input/input";
import FormControlComp, { FormControlProps } from "./form-control";

export default {
  title: "Forms/FormControl",
  component: FormControlComp,
} as Meta;

// eslint-disable-next-line react/prop-types
export const FormControl: Story<FormControlProps> = ({ error, ...args }) => (
  <FormControlComp {...args} error={error}>
    <Input name="firstName" error={error} />
  </FormControlComp>
);

FormControl.args = {
  name: "firstName",
  label: "First Name",
};
