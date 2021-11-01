// Button.stories.ts | Button.stories.tsx

import { Meta } from "@storybook/react";

import Avatar from "./Avatar";

export default {
  component: Avatar,
  title: "Components/Avatar",
} as Meta;

export const Primary: React.VFC<{}> = () => (
  <Avatar
    src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
    alt="Colm Tuite"
  />
);
