// Nome Imports
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

// Style options
export const StyledH1 = styled.h1`
  &.h1black {
    font-family: "Red Hat Display", sans-serif;
    font-size: 60px;
    font-weight: 900;
    line-height: 72px;
    letter-spacing: 2;
    color: ${props => props.theme.FontColour_2};
  }
`
export const StyledH2 = styled.h2`
  font-size: 44px;
  line-height: 56px;
  letter-spacing: 2;
  color: ${props => props.theme.FontColour_2};
  &.h2black {
    font-family: "Red Hat Display", sans-serif;
    font-weight: 900;
  }
  &.h2regular {
    font-family: "Red Hat Display", sans-serif;
    font-weight: 400;
  }
`
export const StyledH3 = styled.h3`
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 2;
  color: ${props => props.theme.FontColour_2};
  &.h3black {
    font-family: "Red Hat Display", sans-serif;
    font-weight: 900;
  }
  &.h3regular {
    font-family: "Red Hat Display", sans-serif;
    font-weight: 400;
  }
`

export const StyledH4 = styled.h4`
  &.h4black {
    font-family: "Red Hat Display", sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 2;
    color: #1a1e26;
    text-transform: uppercase;
  }
`

// {children} renders within the button as text
// {elementType} is heading element to be returned
// {customStyle} is the styling to apply to the heading
const Heading = ({ elementType, customStyle, children }) => {
  if (elementType == "h1") {
    return <StyledH1 className={customStyle}>{children}</StyledH1>
  } else if (elementType == "h2") {
    return <StyledH2 className={customStyle}>{children}</StyledH2>
  } else if (elementType == "h3") {
    return <StyledH3 className={customStyle}>{children}</StyledH3>
  } else if (elementType == "h4") {
    return <StyledH4 className={customStyle}>{children}</StyledH4>
  }

  // Prop types
  Heading.propTypes = {
    elementType: PropTypes.string.isRequired,
    customStyle: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  }

  // Default props
  Heading.defaultProps = {
    headingType: "H1",
    customStyle: "h1black",
    children: "I'm a header",
  }
}

export default Heading
