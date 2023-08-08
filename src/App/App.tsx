import "./index.scss"
import Photo from "shared/assets/images/images.jpg"
import Icon from "shared/assets/svg/svg.svg"
import Button from "shared/ui/button/Button"

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = () => {
  
	return (
		<>
			<h1 data-testid="h1">{__IS_DEV__ ? "dev" : "prod"}</h1>
			<Button>qwer</Button>
			<img src={Photo} data-testid="image"/>
			<Icon data-testid="icon"/>
			asd
		</>
	)
}

export default App
