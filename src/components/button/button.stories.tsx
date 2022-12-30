import type { Meta, StoryFn } from "@storybook/react";
import { capitalize } from "lodash";
import ButtonComp, { ButtonProps } from "./button";

export default {
  title: "Button",
  component: ButtonComp,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", gap: "16px" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

export const variants: StoryFn<ButtonProps> = () => (
  <>
    {(["text", "filled", "outline"] as ButtonProps["variant"][]).map(
      (variant) => (
        <ButtonComp variant={variant}>{capitalize(variant)}</ButtonComp>
      )
    )}
  </>
);

export const colors: StoryFn<ButtonProps> = () => (
  <>
    {(
      ["default", "primary", "secondary", "error"] as ButtonProps["color"][]
    ).map((color) => (
      <ButtonComp variant="filled" color={color}>
        {capitalize(color)}
      </ButtonComp>
    ))}
  </>
);
