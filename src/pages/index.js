import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout/"
import SEO from "../components/SEO/seo.js"
import Button from "../components/ui/Button"
import prodigyEd from "../images/ed.png"

const StyledIndexPage = styled.div`
  text-align: center;
  h1 {
    color: ${props => props.theme.PrimaryColour_1};
    padding-top: 20vh;
    font-family: "Red Hat Display", sans-serif;
    font-weight: 800;
  }
  button {
    margin-top: 50px;
  }
  div img {
    width: 300px;
    height: auto;
    margin-top: 50px;
  }
`

const IndexPage = () => (
  <Layout>
    <StyledIndexPage>
      <SEO title="Home" />
      <h1>Welcome to Prodigy</h1>
      <Button customStyle={["pill", "large", "gradient"]}>
        I'm an awesome button!
      </Button>
      <div>
        <img src={prodigyEd} />
      </div>
    </StyledIndexPage>
  </Layout>
)

export default IndexPage
