import React from "react"
import { VStack } from "@chakra-ui/layout"
import { Heading } from "@chakra-ui/react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FailurePage = () => (
  <Layout>
    <SEO title="Home" />
    <VStack spacing={5}>
      <p>Thanks for taking the time to complete the survey</p>
      <Heading as="h1" size="4xl" isTruncated>
        Success!
      </Heading>
    </VStack>
  </Layout>
)

export default FailurePage
