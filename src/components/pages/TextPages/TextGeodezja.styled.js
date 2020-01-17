import styled from "styled-components";

export const StyledP = styled.div`
display:flex;
position: relative;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
padding-top: 2vh;
  padding-left: 8vw;
  padding-right: 8vw;
.tittle p {
  justify-content: flex-start;
	align-items: flex-start;
	align-content: flex-start;
  font-size: 2vh;
  font-weight: 600;
  margin-bottom: 1vh;
}
.two {
border-bottom: 1px solid #ec7801;
}
.dots{
  margin-top: 1vh;
  font-size: 1.4vh;
  position: relative;
  justify-content: center;
	align-items: center;
	align-content: center;
}

img 
{

  height: 40vh;
  padding: 20px;
  opacity: 0.1;
}
  @media (max-width: 768px) {
    img {
      margin-top: 2vh;
      width: 100vw;
      height: auto;
      padding: 0;
      border-radius: 0px;

`;
