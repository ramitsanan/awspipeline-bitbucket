import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import defaultIcon from "../../../images/Icons/schoolIcon.svg"

// Style options
export const StyledIcon = styled.div`
  &.small {
    width: 150px;
    height: auto;
  }
  &.medium {
    width: 225px;
    height: auto;
  }
  &.large {
    width: 300px;
    height: auto;
  }
  img {
    width: 100%;
    height: auto;
  }
`
// { iconImage } is the path to the image file to be used
// { iconImageAlt } is the alt description for the image
// {iconLink} - optional. If a URL is passed, will be wrapped in <a> and be the href
// { customStyle } is an array of classes
const Icon = ({ iconImage, iconImageAlt, iconLink, customStyle }) => {
  if (!iconLink) {
    return (
      <StyledIcon className={customStyle}>
        <img src={iconImage} alt={iconImageAlt} />
      </StyledIcon>
    )
  } else {
    return (
      <StyledIcon className={customStyle}>
        <a href={`http://${iconLink}`} target="_blank">
          <img src={iconImage} alt={iconImageAlt} />
        </a>
      </StyledIcon>
    )
  }
}

// Prop types
Icon.propTypes = {
  iconImage: PropTypes.node.isRequired,
  iconImageAlt: PropTypes.string.isRequired,
  iconLink: PropTypes.string,
  customStyle: PropTypes.string.isRequired,
}

// Default props
Icon.defaultProps = {
  iconImage: defaultIcon,
  iconImageAlt: "Chalkboard Icon",
  customStyle: "small",
}

export default Icon
