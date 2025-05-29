import type { Meta, StoryObj } from "@nuxtjs/storybook";
import SimpleButton from "./SimpleButton.vue";
import { MailOpen } from "lucide-vue-next";

const meta = {
    title: "Atoms/Buttons/SimpleButton",
    component: SimpleButton,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof SimpleButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        icon: MailOpen,
    },
};
