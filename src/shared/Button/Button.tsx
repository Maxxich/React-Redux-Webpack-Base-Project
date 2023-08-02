import cls from './Button.module.scss'

interface IButtonProps {
	children?: string
}


const Button: React.FunctionComponent<IButtonProps> = ({
	children
}) => {
	return (
		<button className={cls.Button}>{children}</button>
	)
}

export default Button
