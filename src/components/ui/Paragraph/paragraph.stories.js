import React from "react"
import { withKnobs, text, radios } from "@storybook/addon-knobs"
import Paragraph from "./index.js"
import ThemeGetter from "../../../styles/ThemeGetter.js"

export default {
  title: "UI/Paragraph",
  decorators: [withKnobs],
}

export const ParagraphStyles = () => {
  const styles = {
    Large: "large",
    Small: "small",
    Legal: "legal",
    Details: "detail",
  }
  const themes = {
    Light: "Light Theme",
    Dark: "Dark Theme",
  }

  const themeValue = radios("Theme:", themes, themes.Light)
  const styleValue = radios("Paragraph Style:", styles, styles.Small)
  const customStyle = [styleValue]

  return (
    <ThemeGetter chosenTheme={themeValue}>
      <Paragraph customStyle={customStyle}>{text("Paragraph Text:")}</Paragraph>
    </ThemeGetter>
  )
}
