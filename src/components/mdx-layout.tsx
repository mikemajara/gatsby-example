import React from 'react'
import { MDXProvider } from "@mdx-js/react"
import DefaultLayout from './layout'

import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react'

export default function Layout({ children }) {
  return (
    <DefaultLayout>
      <MDXProvider
        components={{
          // Map HTML element tag to React component
          h1: props => <Heading as="h1" size="xl" color="tomato" {...props}/>,
          h2: props => <Heading as="h2" size="lg" {...props}/>,
          h3: props => <Heading as="h3" size="md" {...props}/>,
          // Or define component inline
          p: props => <p {...props} style={{ color: "rebeccapurple" }} />,
          List,
          ListItem,
          ListIcon
        }}
      >
        {children}
      </MDXProvider>
    </DefaultLayout>
  )
}