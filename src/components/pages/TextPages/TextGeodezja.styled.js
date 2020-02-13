import styled from "styled-components";

export const StyledP = styled.div`
position: relative;
overflow: hidden;
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
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 1vh;
}
.line {  font-size: 16px;
border-bottom: 1px solid #ec7801;
}
.dots{
  margin-top: 1vh;
  font-size: 14px;
  position: relative;
  justify-content: center;
	align-items: center;
	align-content: center;
}

img 
{

  height: 35vh;
  padding: 20px;
  opacity: 0.1;
}
li {
    padding-left: 1em;
    text-indent: -0.7em;
  }

  li::before {
    font-weight: 700;
    content: "• ";
    color: #ec7801;
  }
  ul li {
    list-style: none;
    margin: 5px;
  } 
  @media (max-width: 768px) {

    img {
      margin-top: 2vh;
      width: 70vw;
      height: auto;
      padding: 0;
      border-radius: 0px;
    }
    .tittle p{
      font-size: 0.8rem;
    }
   .line,.dots {
      font-size: 0.7rem
    }

`;
