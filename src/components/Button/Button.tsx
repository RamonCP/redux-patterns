import { ButtonHTMLAttributes } from 'react'
import * as S from './Button.styled'

interface IButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface ButtonProps extends IButtonTypes {
  size?: string
  insideList?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'small',
  insideList = false,
  ...props
}) => (
  <S.Button size={size} insideList={insideList} {...props}>
    {!!children && children}
  </S.Button>
)

export default Button
