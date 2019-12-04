import React from "react"
import { withKnobs, text, radios } from "@storybook/addon-knobs"
import ImgCntr from "./index.js"

export default {
  title: "UI/Image",
  decorators: [withKnobs],
}

export const ImageComponent = () => {
  const sizes = {
    Small: "small",
    Medium: "medium",
    Large: "large",
  }
  const borders = {
    Thin: "borderThin",
    Thick: "borderThick",
    None: "",
  }
  const imgLink = text("URL: ")
  const altText = text("Alt Text: ")
  const sizeValue = radios("Icon Size:", sizes, sizes.Medium)
  const borderValue = radios("Border:", borders, borders.Thin)

  const customStyle = [sizeValue, borderValue]

  return (
    <ImgCntr customStyle={customStyle} imgAlt={altText} imgLink={imgLink} />
  )
}
