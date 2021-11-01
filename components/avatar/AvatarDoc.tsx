import React from "react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Stories,
} from "@storybook/addon-docs";

export default function AvatarDoc() {
  return (
    <div>
      <Title>Avatar</Title>
      <Subtitle />
      <Description>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </Description>
      <Primary />
      <Stories title={"Test"} />
    </div>
  );
}
