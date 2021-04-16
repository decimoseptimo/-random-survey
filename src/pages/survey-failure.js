import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { VStack } from "@chakra-ui/layout"
import { Heading } from "@chakra-ui/react"

const SuccessPage = () => (
  <Layout>
    <SEO title="Home" />
    <VStack spacing={5}>
      <p>There was an error while processing the survey</p>
      <Heading as="h1" size="4xl" isTruncated>
        Failure!
      </Heading>
    </VStack>
  </Layout>
)

export default SuccessPage
