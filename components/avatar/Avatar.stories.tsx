import { Meta } from "@storybook/react";
import Avatar from "./Avatar";
// import { decorators } from "../../.storybook/preview";

export default {
  component: Avatar,
  title: "Components/Avatar",
} as Meta;

export const BasicAvatar: React.VFC<{}> = () => (
  <Avatar
    src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
    alt="Colm Tuite"
  />
);
