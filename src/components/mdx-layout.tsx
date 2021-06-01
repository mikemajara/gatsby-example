import { MDXProvider } from "@mdx-js/react"

import {
  Heading,
  Text,
  List,
  ListItem
} from '@chakra-ui/react'

export default function Layout({ children }) {
  return (
    <MDXProvider
      components={{
        // Map HTML element tag to React component
        h1: props => <h1 {...props}/>,
        h2: props => <Heading as="h2" size="lg" {...props}/>,
        h3: props => <Heading as="h3" size="md" {...props}/>,
        // h1: props => <Heading as="h1" size="xl" {...props}/>,
        // h2: props => <Heading as="h2" size="lg" {...props}/>,
        // h3: props => <Heading as="h3" size="md" {...props}/>,
        // Or define component inline
        p: props => <p {...props} style={{ color: "rebeccapurple" }} />,
      }}
    >
      {children}
    </MDXProvider>
  )
}