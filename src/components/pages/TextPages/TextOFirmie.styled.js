import styled from "styled-components";
export const StyledP = styled.div`
  padding: 2vh 20vw;
  color: #444;
  text-align: justify;
  white-space: pre-line;
display: flex;
  flex-direction: row;


  .top {
    flex-direction: row;
  }

  .container2 {
    position: relative;
    display: flex;
    flex-direction: row;

    height: 8vh;



  }
  .tittle {

    margin-top: 2vh;
    font-size: 16px;
  }

  .about,
  .text1,
  .text2 {
    margin: 2vh auto;
    font-size: 16px;
  }

  .about p {
    font-weight: 600;
  }

  img {
    width: 20vw;
    height: auto;
    padding: 20px;
    margin-left: 2vw;
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
    transition:  all 0.3s;
   
  }
  .logo1 img {
    position: relative;
    right: 3vw;
    height: 7vh;  
    width: auto;
    outline: none; top: 1vh;

  }
  .logo2 img {
    position: relative;
    right: 2vw;

    outline: none;
    height: 9vh;  width: auto;
   
  }


  .logo1:hover,.logo2:hover {

    transform: scale(1.1);  
  }

@media (max-width: 1440px) 
  {  
    
    padding: 2vh 15vw;
    img {
      width: 35vw;
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    padding-right: 10vw;
  padding-left: 10vw;

  .logo1 img,.logo2 img {
    height: 10vh;
  }
 
  .div6 img {
    padding: 2vh 2vw;
    width: 80vw;   
    margin-right: 50vw; 
    justify-content: center;
	align-items: center;
	align-content: center;
  }

  .container{
    border-bottom: none;
  

  }
  .about,
  .text1,
  .text2,.tittle {
    font-size: 12px}
`;
