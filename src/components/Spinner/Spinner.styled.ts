import styled from 'styled-components'

const SpinnerComponent = styled.div`
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999rem;
  border-top: 1.1rem solid rgb(106 27 96 / 20%); //1.1rem solid rgb(106 27 96 / 20%)
  border-right: 1.1rem solid rgb(106 27 96 / 20%);
  border-bottom: 1.1rem solid rgb(106 27 96 / 20%);
  border-left: 1.1rem solid #6a1b60;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
  border-radius: 50%;
  width: 10rem;
  height: 10rem;

  &:after {
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
  }

  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`

export default SpinnerComponent
