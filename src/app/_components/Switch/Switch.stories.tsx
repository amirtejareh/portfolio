import { Meta, StoryObj } from "@storybook/react";
import Switch from "./Switch";

const meta: Meta<typeof Switch> = {
  component: Switch,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const DefaultSwitch: Story = {
  render: () => (
    <>
      <Switch />
    </>
  ),
};
