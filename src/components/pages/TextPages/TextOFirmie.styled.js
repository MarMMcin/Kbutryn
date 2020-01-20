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
   
  }
  .container2 {
    display: flex;
    flex-direction: row;


  }
  .tittle {

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
  .div6{
    position: relative;
    cursor: pointer;
    outline: none;
  }
  .toggler button {
    position: absolute;
    width: 20vw;
    height: 25vw;
    top:0;
    left: 0;
    border: 0;
background-color: transparent;
    outline: none;
    cursor: pointer;
  }
  .logo1,.logo2 {
    transition: All 0.2s ease-in-out;
  }
  .logo1 img {
    height: 8vh;
    width: auto;
    outline: none;
    justify-content: flex-start;
  }
  .logo2 img {
    position: relative;
    top: -10px;
    outline: none;
    height: 10vh;
    width: auto;
    justify-content: flex-end;
  }

  .logo1 span,
  .logo2 span {
    font-size: 1vh;
  
  }
  .logo1:hover,.logo2:hover {
    transform: scale(1.2);
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
