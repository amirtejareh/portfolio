import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  render: () => (
    <>
      <Button dimensions="tiny" shape="default">
        Contact Me
      </Button>
    </>
  ),
};

export const ButtonsDisabled: Story = {
  render: () => (
    <div className="flex gap-5 flex-wrap items-center justify-center">
      <Button disabled shape="default">
        Default Button Disabled{" "}
      </Button>
    </div>
  ),
};

export const ButtonSizes: Story = {
  render: () => (
    <div className="flex gap-5 flex-wrap items-center justify-center">
      <Button dimensions="tiny">Tiny</Button>
      <Button dimensions="small">Small</Button>
      <Button dimensions="medium">Medium</Button>
      <Button dimensions="standard">Standard</Button>
      <Button dimensions="large">Large</Button>
    </div>
  ),
};

export const FullButton: Story = {
  render: () => (
    <div className="flex gap-5 flex-wrap items-center justify-center">
      <Button shape="full">Full Button</Button>
    </div>
  ),
};
