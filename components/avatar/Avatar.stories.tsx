// Button.stories.ts | Button.stories.tsx

import { Meta } from "@storybook/react";

import Avatar from "./Avatar";

export default {
  component: Avatar,
  title: "Components/Avatar",
} as Meta;

export const Primary: React.VFC<{}> = () => <Avatar />;
