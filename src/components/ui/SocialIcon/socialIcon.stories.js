import React from "react"
import { withKnobs, text, radios } from "@storybook/addon-knobs"
import SocialIcon from "./index.js"

export default {
  title: "UI/Social Icon",
  decorators: [withKnobs],
}

export const SocialIconStyles = () => {
  const sizes = {
    Small: "small",
    Medium: "medium",
    Large: "large",
  }
  const url = text("Link: ")
  const altText = text("Alt Text: ")
  const sizeValue = radios("Icon Size:", sizes, sizes.Medium)
  const customStyle = [sizeValue]

  return (
    <SocialIcon
      customStyle={customStyle}
      socialLink={`http://${url}`}
      iconImageAlt={altText}
    />
  )
}
