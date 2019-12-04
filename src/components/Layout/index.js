// Node Imports
import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

// Components to be rendered on every page
import Header from "../Header/"
import Footer from "../Footer/"
import backgroundLogo from "../../images/backgroundLogo.svg"
import ThemeGetter from "../../styles/ThemeGetter.js"

// Global CSS stlyes and resets
import "../../styles/global.css"

// ====== STYLING ======
const StyledLayout = styled.div`
  padding: 30px 25px;
  /* background: radial-gradient(
    circle farthest-corner at 100% 90%,
    #371844 0%,
    #2e3e4c 100%
  ); */
  background-color: #eaeaea;
  color: ${props => props.theme.PrimaryColour_2};
  main {
    height: 100vh;
    /* width: 900px; */
    margin: auto;
    /* background-color: white; */
  }
  .backgroundLogoWrapper {
    width: 70%;
    max-width: 700px;
    height: auto;
    .backgroundLogo {
      height: auto;
      width: 100%;
      opacity: 0.32;
    }
  }
`

// ====== LAYOUT ======
// The main layout component that will wrap all web content to display
// {children} Pages/Components - dynamic content generated throughout site
// <ThemeGetter /> queries the CMS for themes, renders a <ThemeProvider /> for StyledComponents
// {chosenTheme} - can pass down user toggled theme name to <ThemeGetter />, else it will use defualt theme.
// ====================

const Layout = ({ children }) => {
  return (
    <ThemeGetter chosenTheme={"Dark Theme"}>
      <StyledLayout>
        {/* <Header siteTitle="Title" /> */}

        <main>{children}</main>
        {/* <div className="backgroundLogoWrapper">
          <img
            src={backgroundLogo}
            alt="Prodigy Logo"
            className="backgroundLogo"
          />
        </div> */}
        {/* <Footer /> */}
      </StyledLayout>
    </ThemeGetter>
  )
}

// ====== PROP TYPES ======
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
