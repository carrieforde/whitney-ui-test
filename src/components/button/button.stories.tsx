import type { Meta } from "@storybook/react";
import ButtonComp from "./button";

export default {
  title: "Button",
  component: ButtonComp,
} as Meta;

export const Button = () => (
  // eslint-disable-next-line no-console
  <ButtonComp onClick={() => console.log("click")}>Click Me!</ButtonComp>
);
