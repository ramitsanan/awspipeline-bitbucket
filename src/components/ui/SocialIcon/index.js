import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import defaultIcon from "../../../images/Icons/SocialIcons-Round/FacebookRound-Dark.svg"

// Style options
export const StyledSocialIcon = styled.div`
  &.small {
    width: 16px;
    height: 16px;
  }
  &.medium {
    width: 24px;
    height: 24px;
  }
  &.large {
    width: 32px;
    height: 32px;
  }
  a img {
    width: 100%;
    height: auto;
  }
`
// { iconImage } is the path to the image file to be used
// { iconImageAlt } is the alt description for the image
// { socialLink } is the URL for the social media account
// { customStyle } is an array of classes
const SocialIcon = ({ iconImage, iconImageAlt, socialLink, customStyle }) => {
  return (
    <StyledSocialIcon className={customStyle}>
      <a href={socialLink} target="_blank">
        <img src={iconImage} alt={iconImageAlt} />
      </a>
    </StyledSocialIcon>
  )
}

// Prop types
SocialIcon.propTypes = {
  iconImage: PropTypes.node.isRequired,
  iconImageAlt: PropTypes.string.isRequired,
  socialLink: PropTypes.string.isRequired,
  customStyle: PropTypes.array,
}

// Default props
SocialIcon.defaultProps = {
  iconImage: defaultIcon,
  iconImageAlt: "Social Media Icon",
  socialLink: "#",
  customStyle: ["small"],
}

export default SocialIcon
