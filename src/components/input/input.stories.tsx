import type { Meta, Story } from "@storybook/react";
import InputComp, { InputProps } from "./input";

export default {
  title: "Forms/Input",
  component: InputComp,
} as Meta;

export const Input: Story<InputProps> = (args) => (
  <InputComp {...args} ref={null} />
);

Input.args = {
  name: "firstName",
  inputMode: "text",
};
