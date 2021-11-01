import { Meta } from "@storybook/react";
import Avatar from "./Avatar";
import React from "react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Stories,
} from "@storybook/addon-docs";

export default {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <div>
          <Title>Avatar</Title>
          <Subtitle />
          <Description>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Description>
          <div style={{ textAlign: "center" }}>
            <Primary />
          </div>
        </div>
      ),
    },
  },
} as Meta;

export const BasicAvatar: React.VFC<{}> = () => {
  return (
    <Avatar
      src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
      alt="Colm Tuite"
    />
  );
};
