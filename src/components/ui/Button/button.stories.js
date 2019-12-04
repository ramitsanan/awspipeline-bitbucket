// Node Imports
import React from "react"
import { action } from "@storybook/addon-actions"
import { withKnobs, text, radios } from "@storybook/addon-knobs"
// Component Imports
import Button from "./index.js"
import ThemeGetter from "../../../styles/ThemeGetter.js"

// Name for List
export default {
  title: "UI/Button",
  decorators: [withKnobs],
}

// Button Options
export const ButtonStyles = () => {
  const themes = {
    Light: "Light Theme",
    Dark: "Dark Theme",
  }
  const sizes = {
    Medium: "medium",
    Large: "large",
  }
  const styles = {
    Solid: "solid",
    Outline: "outline",
    Gradient: "gradient",
  }
  const corners = {
    Rectangle: "rectangle",
    Pill: "pill",
  }
  // User Inputs
  const themeValue = radios("Theme:", themes, themes.Light)
  const sizeValue = radios("Button Size:", sizes, sizes.Medium)
  const styleValue = radios("Button Style:", styles, styles.Solid)
  const cornerValue = radios("Button Corners:", corners, corners.Rectangle)

  // Style to deliver to Button component
  const customStyle = [sizeValue, styleValue, cornerValue]

  return (
    <ThemeGetter chosenTheme={themeValue}>
      <Button
        customStyle={customStyle}
        onClick={action("Button has been clicked!")}
      >
        {text("Button Text:", "Read More")}
      </Button>
    </ThemeGetter>
  )
}
