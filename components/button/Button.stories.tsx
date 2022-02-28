import Button, { IButton } from "./Button";
import { Story } from "@storybook/react";

export default {
  component: Button,
  title: "Components/Button",
  argTypes: {
    children: {
      name: "Label",
    },
  },
};

const Template = (args: IButton) => <Button {...args} />;

export const ButtonBase: Story<IButton> = Template.bind({});

ButtonBase.args = {
  children: "Button",
};
