import React from "react";
import { StyledHero, Right, Left, Top, HeroImg, ImgContent } from "./style"
import { Header } from "../../atoms/typography"
import HeroImage from "../../atoms/image"
import Navbar from '../nav'

const Hero = () => {
  return (
      <StyledHero>

        <Left className="leftTemp" color=''>
          <Navbar/>
        </Left>

        <Right color='primary'/>
        

        <Top color=''>
          <ImgContent>
            <HeroImg className='heroimg' color='secondary'>
                <HeroImage/>
            </HeroImg>

            <Header color='txt' className='herotext' font-size='xxlarge'>make it simple but significant</Header>
          </ImgContent>
        </Top>
      </StyledHero>
  );
};

export default Hero;
