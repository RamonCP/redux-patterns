import { useSelector } from 'react-redux'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

import { AplicationState } from 'redux/store'
import * as S from './Notify.styled'

const Notify = () => {
  const notify = useSelector((state: AplicationState) => state.notify)
  return (
    <>
      {notify.show && (
        <S.Wrapper className={notify.type}>
          <IoMdCheckmarkCircleOutline />
          <p>{notify.message}</p>
        </S.Wrapper>
      )}
    </>
  )
}

export default Notify
