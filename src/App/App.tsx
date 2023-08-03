import { Suspense, useState } from "react"
import "./index.scss"
import { Button } from "shared/Button/Button.async"
import Photo from "shared/assets/images/images.jpg"
import Icon from "shared/assets/svg/svg.svg"

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = () => {
	const [showButton, setShowButton] = useState<boolean>(false)
	const handleClick = () => {
		setShowButton(true)
	}
  
	return (
		<>
			<h1 data-testid="h1" onClick={handleClick}>{__IS_DEV__ ? "dev" : "prod"}</h1>
			{
				showButton
				&&
				<Suspense fallback="...Loading">
					<Button>qwer</Button>
				</Suspense>
			}
			<img src={Photo} data-testid="image"/>
			<Icon data-testid="icon"/>
			<Icon data-testid="icon"/>
		</>
	)
}

export default App
