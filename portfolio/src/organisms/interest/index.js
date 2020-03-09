import React from "react";
import StyledIcon from "../../atoms/iconbg";
// import { MdFlight } from "react-icons/fi";
import img1 from "./images/flight.jfif";
import img2 from "./images/food.jfif";
import img3 from "./images/reading.png";
import img4 from "./images/fitness.png";
import { Img } from "./style";
import { FlexDiv } from "./style";
import { Header } from "../../atoms/typography";
import { Exp } from "../experience/style";
const Interests = [
  {
    image: img1,
    title: "Travel"
  },
  {
      image: img2,
      title: "Fitness"
  },
  {
      image: img3,
      title: "Reading"
  },
  {
      image: img4,
      title: "Fitness"
  }
];
const MyInterest = () => {
  return (
    <Exp>
      <Header className='header'>Interests</Header>
      <FlexDiv>
        {Interests.map(({ image, title }) => (
          <div>
            <StyledIcon>
              <Img src={image} />
            </StyledIcon>
            <Header as="span" font-size="large">
              {title}
            </Header>
          </div>
        ))}
      </FlexDiv>
    </Exp>
  );
};
export default MyInterest;
