import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "@chakra-ui/button"
import { VStack } from "@chakra-ui/layout"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <VStack>
      <p>Please complete a random survey, just for the sake of it!</p>
      <Link to="/take-survey">
        <Button colorScheme="teal" size="lg" width="20rem">
          Start Survey
        </Button>
      </Link>
    </VStack>
  </Layout>
)

export default IndexPage
