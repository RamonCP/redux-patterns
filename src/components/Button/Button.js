import * as S from './Button.styled'

const Button = ({ onClick, children, size }) => (
  <S.Button size={size} onClick={onClick}>
    {children}
  </S.Button>
)

export default Button
