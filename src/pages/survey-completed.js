import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { VStack } from "@chakra-ui/layout"
import { Heading } from "@chakra-ui/react"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <VStack spacing={5}>
      <p>Thanks for taking the time to complete the survey</p>
      <Heading as="h1" size="4xl" isTruncated>
        Have a nice day!
      </Heading>
    </VStack>
  </Layout>
)

export default IndexPage
