import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout/"
import SEO from "../components/SEO/seo.js"

const SecondPage = () => {
  const themeData = useStaticQuery(graphql`
    query ThisQuery {
      prismic {
        allTheme_optionss {
          edges {
            node {
              choose_themes {
                theme_options {
                  ... on PRISMIC_Theme {
                    theme_title
                    body {
                      ... on PRISMIC_ThemeBodyFont {
                        type
                        fields {
                          font_link {
                            ... on PRISMIC__ExternalLink {
                              url
                            }
                          }
                          font_name
                        }
                      }
                      ... on PRISMIC_ThemeBodyColour {
                        fields {
                          colour_choice
                          colour_name
                        }
                        type
                        label
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  console.log("THEME: ", themeData)

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
