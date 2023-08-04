import { ButtonHTMLAttributes } from "react"
import cls from "./Button.module.scss"

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: string
	// name: string
}


const Button: React.FunctionComponent<IButtonProps> = ({
	children,
	...rest
}) => {
	return (
		<button
			className={cls.Button} 
			data-testid={"button"}
			{...rest}
		>
			{children}
		</button>
	)
}

export default Button
