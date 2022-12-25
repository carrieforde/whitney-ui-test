import type { Meta, Story } from "@storybook/react";
import ButtonComp, { ButtonProps } from "./button";

export default {
  title: "Button",
  component: ButtonComp,
} as Meta;

export const Button: Story<ButtonProps> = (args) => (
  <ButtonComp {...args}>Click Me!</ButtonComp>
);
