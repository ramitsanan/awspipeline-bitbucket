import React from "react"
import { withKnobs, text, radios } from "@storybook/addon-knobs"
import Icon from "./index.js"

export default {
  title: "UI/Icon",
  decorators: [withKnobs],
}

export const IconStyles = () => {
  const sizes = {
    Small: "small",
    Medium: "medium",
    Large: "large",
  }
  const iconLink = text("URL: ")
  const altText = text("Alt Text: ")
  const sizeValue = radios("Icon Size:", sizes, sizes.Medium)
  const customStyle = sizeValue

  return (
    <Icon
      customStyle={customStyle}
      iconImageAlt={altText}
      iconLink={iconLink}
    />
  )
}
