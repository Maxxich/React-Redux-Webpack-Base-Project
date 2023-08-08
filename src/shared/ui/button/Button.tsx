import classNames from "classnames"
import { ButtonHTMLAttributes } from "react"
import cls from "./Button.module.scss"

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: string
	className?: string
}


const Button: React.FunctionComponent<IButtonProps> = ({
	children,
	className,
	...rest
}) => {
	const classes = classNames(cls.Button, className)

	
	return (
		<button
			className={classes} 
			data-testid={"button"}
			{...rest}
		>
			{children}
		</button>
	)
}

export default Button
