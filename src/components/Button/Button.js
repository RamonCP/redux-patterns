import * as S from './Button.styled'

const Button = ({ onClick, children, size, type }) => (
  <S.Button size={size} type={type} onClick={onClick}>
    {children}
  </S.Button>
)

export default Button
