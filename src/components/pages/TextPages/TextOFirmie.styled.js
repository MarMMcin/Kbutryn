import styled from "styled-components";
export const StyledP = styled.div`
  padding: 2vh 20vw;
  padding-right: 10vw;
  padding-left: 30vw;
  text-align: justify;
  white-space: pre-line;

  flex-direction: column;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 0.2fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  .top {
    flex-direction: row;
  }
  .container {
    border-bottom: 1px solid black;
  }
  .container2 {
    display: flex;
    
    flex-direction: row;

  }
  .tittle {
    width:
    margin-top: 2vh;
    font-size: 2vh;
  }

  .about,
  .text1,
  .text2 {
    margin: 2vh auto;
    font-size: 1.7vh;
  }

  .about p {
    font-weight: 600;
  }

  img {
    width: 20vw;
    height: auto;
    padding: 2vh 2vw;
  }
  .logo1 img {
    height: 8vh;
    width: auto;
    justify-content: flex-start;
  }
  .logo2 img {
    position: relative;
    top: -10px;
    
    height: 10vh;
    width: auto;
    justify-content: flex-end;
  }

  .logo1 span,
  .logo2 span {
    font-size: 1vh;
  }

  @media (max-width: 768px) {
    padding-right: 10vw;
  padding-left: 10vw;
    display: flex;
 
  .div6 img {
    width: 80vw;   
    margin-right: 50vw; 
    justify-content: center;
	align-items: center;
	align-content: center;
  }
  .container{
    border-bottom: none;
  
  }
`;
