import React from "react"
import { withKnobs, text, select, radios } from "@storybook/addon-knobs"
import Heading from "./index.js"
import ThemeGetter from "../../../styles/ThemeGetter.js"

export default {
  title: "UI/Heading",
  decorators: [withKnobs],
}

export const HeadingStyles = () => {
  const headingTypes = {
    H1: {
      element: "h1",
      style: "h1black",
    },
    "H2 Black": {
      element: "h2",
      style: "h2black",
    },
    "H2 Regular": {
      element: "h2",
      style: "h2regular",
    },
    "H3 Black": {
      element: "h3",
      style: "h3black",
    },
    "H3 Regular": {
      element: "h3",
      style: "h3regular",
    },
    H4: {
      element: "h4",
      style: "h4black",
    },
  }

  const themes = {
    Light: "Light Theme",
    Dark: "Dark Theme",
  }
  const themeValue = radios("Theme:", themes, themes.Light)
  const headingTypeValue = select(
    "Heading Type:",
    headingTypes,
    headingTypes.H1
  )

  return (
    <ThemeGetter chosenTheme={themeValue}>
      <Heading
        elementType={headingTypeValue.element}
        customStyle={headingTypeValue.style}
      >
        {text("Heading Text:", "Your fancy heading here")}
      </Heading>
    </ThemeGetter>
  )
}
