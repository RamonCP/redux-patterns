import * as S from './Heading.styled'

export interface HeadingProps {
  size?: 'small' | 'medium' | 'large'
  color?: 'black' | 'white'
  children: React.ReactNode
}

const Heading = ({
  size = 'medium',
  color = 'black',
  children
}: HeadingProps) => (
  <S.Wrapper size={size} color={color}>
    {children}
  </S.Wrapper>
)

export default Heading
