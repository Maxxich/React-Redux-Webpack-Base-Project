import cls from './Button.module.scss'

interface IButtonProps {
}

const Button: React.FunctionComponent<IButtonProps> = (props) => {
  return (
    <button className={cls.Button}>123132</button>
  );
};

export default Button;
