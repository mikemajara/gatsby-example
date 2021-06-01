import { Box } from '@chakra-ui/layout'
import { Heading } from '@chakra-ui/react'
import React from 'react'
import Layout from '../components/layout'

export default function Blog() {
  return (
    <Layout title="blog">
      <Heading as="h1" size="xl">Title</Heading>
      Hola amigo
    </Layout>
  )
}
