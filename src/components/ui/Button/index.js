import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

// Style options
export const StyledButton = styled.button`
  font-family: "Red Hat Display", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  /* Button Styles */
  &.solid {
    background-color: ${props => props.theme.PrimaryColour_3};
    color: ${props => props.theme.FontColour_3};
  }
  &.outline {
    padding: 10px 25px;
    background-color: transparent;
    color: ${props => props.theme.FontColour_1};
    border: solid 1px ${props => props.theme.PrimaryColour_1};
  }
  &.gradient {
    background-image: linear-gradient(
      to right,
      ${props => props.theme.GradientColour_start},
      ${props => props.theme.GradientColour_end}
    );
    color: ${props => props.theme.FontColour_3};
  }
  /* Button Sizes */
  &.medium {
    padding: 12px 30px;
  }
  &.large {
    padding: 16px 40px;
  }
  /* Button Corners */
  &.pill {
    border-radius: 25px;
  }
  &.rectangle {
    border-radius: 0;
  }
`
// {children} renders within the button as text
// {customAction} is the onClick method
// {customStyle} is an array of classes
const Button = ({ children, onClick, customStyle }) => {
  return (
    <StyledButton onClick={onClick} className={customStyle}>
      {children}
    </StyledButton>
  )
}

// Prop types
Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  customStyle: PropTypes.array,
}

// Default props
Button.defaultProps = {
  onClick: null,
  customStyle: ["solid", "medium", "rectangle"],
  children: "Button",
}

export default Button
