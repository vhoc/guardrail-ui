import type { Meta, StoryObj } from "@storybook/react";
import { SideBar } from "./SideBar";

const meta: Meta<typeof SideBar> = {
  title: "Containers/Sidebar",
  component: SideBar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const lorem: string =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export const Default: Story = {
  args: {
    items: [
      {
        id: 2,
        time: "4:11 PM",
        description: "2 " + lorem,
      },
      {
        id: 3,
        time: "9:23 PM",
        description: "3 " + lorem,
      },
      {
        id: 4,
        time: "7:16 PM",
        description: "4 " + lorem,
      },
    ],
    favorites: [
      {
        id: 1,
        time: "3:42 PM",
        description: "1 " + lorem,
      },
    ],
  },
};
