import React from 'react'
import Header from '@components/header'
import Footer from '@components/footer'
import Helmet from 'react-helmet'
import { Container } from '@chakra-ui/layout'
import { useStaticQuery, graphql } from 'gatsby';

export default function layout(props: any) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
      <main>
        <Header/>
        <Container minH="90vh" mx={['5','20']} py='10'>
          {props.children}
        </Container>
        <Footer/>
      </main>
    </>
  )
}
