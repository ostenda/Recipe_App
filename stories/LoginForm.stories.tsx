import {ComponentMeta, ComponentStory} from "@storybook/react";
import LoginForm from "../src/components/LoginForm";

export default {
  title: "Login From",
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />;

export const Primary = Template.bind({});
