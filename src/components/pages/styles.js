import styled from "styled-components";
export const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const StyledH1 = styled.h1`
  position: absolute;
  top: 7vh

  color: black;
  letter-spacing: 4px;
  width: 100vw;

  font-size: 25px;
  background-color: white;
  text-align: center;
  opacity: 0.8;
  z-index: -3;
  @media (max-width: 768px) {
    top:7vh;
    font-size: 15px;
  }
`;

export const Banner = styled.section`
  position: relative;
  margin-bottom: 20vh;
  z-index: -1;
`;
export const TopImage = styled.img`
  position: absolute;
  height: 18vh;
  object-fit: cover;
  z-index: -4;
  width: 100vw;
  z-index: -3;
  animation-name: fade;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 8s;
  animation-direction: alternate;
  @keyframes fade {
    0% {
      opacity: 1;
    }
    25% {
      opacity: 1;
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @media (max-width: 768px) {
    margin-bottom: 19vh;
  }
`;
export const BottomImage = styled.img`
  position: absolute;
  height: 18vh;
  object-fit: cover;
  z-index: -4;
  width: 100vw;
`;
export const MenuContainer = styled.div`

position: relative;
z-index: 1;
display: flex;  
height: 90vh;
.content {
position: absolute;
z-index: -2000;
background-color: black;
color: black;
}
.bg {
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top:0;
  left:0
  width: 100vw;
  height: 90vh;
  z-index: -3;
 
}

img { 
  
  position: relative;
  top:0;
  left:0;
  z-index: -4; 
  object-fit: cover;
  width: 100vw;
  height: 90vh;

}
.container {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;  z-index: -1;

}
.container span {
  
  display: block;
}
.text1 {
  color: black;
  font-size: 60px;
  font-weight: 700;
  letter-spacing: 8px;
  margin-bottom: 20px;
  background: white;
  opacity: 0.5;

  position: relative;
  animation: text 3s 1;
}
.text2 {
  font-size: 30px;
  color: #ec7801;
}

@keyframes text {
  0% {
    color: black;
    opacity: 1;
    margin-bottom: -40px;
  }
  30% {
    letter-spacing: 25px;
    margin-bottom: -40px;
    opacity: 1;
    
  }
  85% {
    letter-spacing: 8px;
    margin-bottom: -40px;
    opacity: 1;
  }

  100% {
 
  }
}
@media (max-width: 768px) 

{
  img,.bg{
    
    height: 100vh;
}

.text1{
  font-size: 40px;
}  .text2{
  font-size: 15px;
}}
@media (max-width: 768px) {
overflow: hidden;
height: 100vh;
}


`;
export const Error404 = styled.p`
  margin-top: 40px;
  font-size: 48px;
  text-align: center;
  color: black;
`;
