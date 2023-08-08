import { StoryFn, Meta } from "@storybook/react"
import App from "./App"
 
export default {
	title: "app/App",
	component: App,
} as Meta<typeof App>
 
const Template: StoryFn<typeof App> = (args) => <App {...args} />
export const Default= Template.bind({})
Default.args = {
    
}
