// Node Imports
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
// Default theme for backup
import defaultTheme from "./defaultTheme.js"

// ====== THEME GETTER ======
// A functional component that queries Prismic for themes
// {children} - will allow <Layout /> and it's children to be provided the theme
// { theme } OBJECT - the current theme to pass to StyledComponents
// { chosenTheme } OPTIONAL - the theme value to pass in to activate the desired theme
// <ThemeProvider /> is a premade component from StyledComponents
// ==========================
const ThemeGetter = ({ children, chosenTheme }) => {
  // Query to Prismic
  const {
    prismic: {
      allTheme_providers: {
        edges: {
          [0]: {
            node: { chosen_themes: themeData },
          },
        },
      },
    },
  } = useStaticQuery(graphql`
    {
      prismic {
        allTheme_providers {
          edges {
            node {
              theme_provider_title
              _linkType
              chosen_themes {
                theme_objects {
                  ... on PRISMIC_Theme_object {
                    theme_name_for_display
                    font_colour_1
                    font_colour_2
                    font_colour_3
                    gradient_colour_1
                    gradient_colour_2
                    primary_colour_1
                    primary_colour_2
                    primary_colour_3
                    primary_colour_4
                    primary_colour_5
                    primary_colour_6
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  // Create a themes object that has nested themes within it for each theme in the query
  const themes = themeData.reduce((acc, theme) => {
    acc[theme.theme_objects.theme_name_for_display[0].text] = {
      FontColour_1: theme.theme_objects.font_colour_1,
      FontColour_2: theme.theme_objects.font_colour_2,
      FontColour_3: theme.theme_objects.font_colour_3,
      PrimaryColour_1: theme.theme_objects.primary_colour_1,
      PrimaryColour_2: theme.theme_objects.primary_colour_2,
      PrimaryColour_3: theme.theme_objects.primary_colour_3,
      PrimaryColour_4: theme.theme_objects.primary_colour_4,
      PrimaryColour_5: theme.theme_objects.primary_colour_5,
      PrimaryColour_6: theme.theme_objects.primary_colour_6,
      GradientColour_start: theme.theme_objects.gradient_colour_1,
      GradientColour_end: theme.theme_objects.gradient_colour_2,
    }
    return acc
  }, {})

  // If {chosenTheme} argument exists, use it as theme. Otherwise use defualtTheme.
  // Should build theme toggle UI into return statement so it can be chosen here, or passed up to come down as prop
  let activeTheme
  if (themes.hasOwnProperty(chosenTheme)) {
    activeTheme = chosenTheme
  } else {
    activeTheme = defaultTheme
  }

  return <ThemeProvider theme={themes[activeTheme]}>{children}</ThemeProvider>
}

export default ThemeGetter
