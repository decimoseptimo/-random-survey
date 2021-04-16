import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "@chakra-ui/button"
import { VStack } from "@chakra-ui/layout"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <VStack>
        <p>Please complete a random survey, just for the sake of it!</p>
        <Button colorScheme="teal" size="lg" width="20rem">
          <Link to="/take-survey">Start Survey</Link>
        </Button>
    </VStack>
  </Layout>
)

export default IndexPage
