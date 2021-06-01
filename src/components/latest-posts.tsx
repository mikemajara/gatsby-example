import { Text, Box, Grid, Heading, LinkOverlay } from '@chakra-ui/layout'
import { LinkBox } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'

const MotionLinkBox = motion(LinkBox)

const posts = [
  {
    title: "First entry",
    description: "Lorem ipsum dolor sit amet, ...",
    href: "/posts/first-entry"
  }
]

const PostCard = (props: any) => (
  <MotionLinkBox
    px="4" py="8"
    maxW="80"
    border="1px"
    borderStyle="solid"
    borderColor="primary.700"
    boxShadow="md"
    borderRadius="md"
    _hover={{
      boxShadow:"lg"
    }}
    whileTap={{
      scale:"0.98",
      boxShadow: "unset"
    }}
  >
    <LinkOverlay href={props.href}/>
    <Heading>{props.title}</Heading>
    <Text>{props.description}</Text>
  </MotionLinkBox>
)

export default function LatestPosts() {

  return (
    <>
      <Heading as="h1">Latest Posts</Heading>
      <Grid
        w={{base:"full", lg: "90%", xl: "80%", "2xl": "full"}}
        pl="1px"
        mt="5"
        templateColumns={{
          base: 'repeat(auto-fill, minmax(250px, 1fr))',
          md: 'repeat(auto-fill, minmax(350px, 1fr))',
        }}
        gap={12}
      >
        {
          posts.map(post => <PostCard {...post}/>)
        }
      </Grid>
    </>
  )
}
