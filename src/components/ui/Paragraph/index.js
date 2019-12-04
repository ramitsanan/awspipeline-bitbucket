import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

// Style options
export const StyledParagraph = styled.p`
  color: ${props => props.theme.FontColour_1};
  &.large {
    font-size: 20px;
    line-height: 32px;
    font-family: "Red Hat Display", sans-serif;
    letter-spacing: 0.2px;
  }
  &.small {
    font-size: 16px;
    line-height: 28px;
    font-family: "Red Hat Display", sans-serif;
    letter-spacing: 0.2px;
  }
  &.legal {
    font-family: "Baskervville", sans-serif;
    letter-spacing: 0.2px;
    font-size: 13px;
    line-height: 23px;
  }
  &.detail {
    font-family: "Barlow", sans-serif;
    font-size: 13px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0;
    color: ${props => props.theme.FontColour_2};
  }
`
// {children} renders within the paragraph as text
// {customStyle} is an array of classes
const Paragraph = ({ children, customStyle }) => {
  return <StyledParagraph className={customStyle}>{children}</StyledParagraph>
}

// Prop types
Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  customStyle: PropTypes.array,
}

// Default props
Paragraph.defaultProps = {
  customStyle: ["small"],
  children:
    "Lorum onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Aamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, ut labore et dolore magna aliqua.",
}

export default Paragraph
