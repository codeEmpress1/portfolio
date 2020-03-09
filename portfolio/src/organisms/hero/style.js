import styled from "styled-components";
import { color } from "../../atoms/colors";

export const Right = styled.div`
width: 35%;
position: absolute;
height: 45em;
top: 13.5%;
right: 28em;
box-shadow: 10px 10px 40px -14px black;
background-color: ${color};

`
export const Left = styled.div`
  background-color: ${color};
`

export const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 35em;
  position: absolute;
  top: 15%;
`

export const HeroImg = styled.div`
  background-color: ${color};
  box-shadow: 2px 2px 58px -13px black;
  position: relative;
  left:15em;
`
export const ImgContent = styled.div`
width: 80%;
display: flex;
align-items: center;
`

export const StyledHero = styled.div`
  min-height: 70vh;
  display: flex;
  position: relative;


  .herotext {
    font-family: 'Homemade Apple';
    left: 2em;
    text-shadow: 0px 10px 6px #84a366;
  }
  
  @media screen and (max-width: 380px) {
    min-height: 90vh;
    .leftTemp {
      display: none;
    }
    .ontop {
      height: 35rem;
      top: 10%;
    }
    .heroimg {
      background-color: #ffffff;
    }
  }

  @media screen and (min-width: 380px) {
    min-height: 70vh;
  }

  @media screen and (min-width: 1080px) {
    min-height: 80vh;
    .ontop {
      top: 20%;
    }
  }

  @media screen and (min-width: 1360px) {
    min-height: 100vh;
    .ontop {
      top: 22%;
    }

    .heroimg {
      width: 60%;
    }
  }
  .herotext {
    position: relative;
    right: 40px;
  }
`;



