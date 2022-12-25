import type { Meta, Story } from "@storybook/react";
import TypographyComp, { TypographyProps } from "./typography";

export default {
  title: "Typography",
  component: TypographyComp,
} as Meta;

export const Typography: Story<TypographyProps> = (args) => (
  <TypographyComp {...args}>
    The quick brown fox jumped over the lazy dog.
  </TypographyComp>
);
