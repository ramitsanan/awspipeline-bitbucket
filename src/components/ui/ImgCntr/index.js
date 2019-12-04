import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
// import Img from "gatsby-image"

import defaultImg from "../../../images/students.jpg"

// Style options
export const StyledImg = styled.div`
  &.small {
    width: 250px;
    height: auto;
  }
  &.medium {
    width: 400px;
    height: auto;
  }
  &.large {
    width: 600px;
    height: auto;
  }
  &.borderThin {
    border: solid black 2px;
  }
  &.borderThick {
    border: solid black 5px;
  }
  img {
    width: 100%;
    height: auto;
  }
`
// { imgSrc } is the path to the image file to be used
// { imgAlt } is the alt description for the image
// {imgLink} - optional. If a URL is passed, will be wrapped in <a> and be the href
// { customStyle } is an array of classes
const ImgCntr = ({ imgSrc, imgAlt, imgLink, customStyle }) => {
  if (!imgLink) {
    return (
      <StyledImg className={customStyle}>
        <img src={imgSrc} alt={imgAlt} />
      </StyledImg>
    )
  } else {
    return (
      <StyledImg className={customStyle}>
        <a href={`http://${imgLink}`}>
          <img src={imgSrc} alt={imgAlt} />
        </a>
      </StyledImg>
    )
  }
}

// Prop types
ImgCntr.propTypes = {
  imgSrc: PropTypes.node.isRequired,
  imgAlt: PropTypes.string.isRequired,
  imgLink: PropTypes.string,
  customStyle: PropTypes.array.isRequired,
}

// Default props
ImgCntr.defaultProps = {
  imgSrc: defaultImg,
  imgAlt: "Prodigy stand in photo",
  customStyle: ["small"],
}

export default ImgCntr
