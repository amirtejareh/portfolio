import { Meta, StoryObj } from "@storybook/react";
import StatCard from "./StatCard";

const meta: Meta<typeof StatCard> = {
  component: StatCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof StatCard>;

export const DefaultStatCard: Story = {
  render: () => (
    <div className="flex gap-16 bg-background">
      <StatCard shiningPosition="top" count={10} text="Years of Experience" />
      <StatCard shiningPosition="right" count={10} text="Completed Projects" />
      <StatCard
        shiningPosition="bottom"
        count={100}
        sign="%"
        text="On Time Delivery"
      />
    </div>
  ),
};
