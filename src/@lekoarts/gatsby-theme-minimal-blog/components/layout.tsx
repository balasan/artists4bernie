import React from "react"
import { Global } from "@emotion/core"
import { AspectImage, AspectRatio, Image, Link } from "@theme-ui/components";
import { Main, Styled, Container, css } from "theme-ui"
import "typeface-ibm-plex-sans"
import SEO from "./seo"
import Header from "./header"
import Footer from "./footer"
import CodeStyles from "../styles/code"
import SkipNavLink from "./skip-nav"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className }: LayoutProps) => (
  <Styled.root data-testid="theme-root">
    <Global
      styles={css({
        "*": {
          boxSizing: `inherit`,
        },
        body: {
          margin: 0,
          padding: 0,
          boxSizing: `border-box`,
          textRendering: `optimizeLegibility`,
        },
        "::selection": {
          backgroundColor: `primary`,
          color: `white`,
        },
        a: {
          transition: `all 0.3s ease-in-out`,
          color: `text`,
        },
      })}
    />
    <SEO />

    
    <AspectImage
      ratio={16/3}
      src={'/bernie-bg.jpg'}
      sx={{
        height: '100%',
        width: '100%',
        objectFit: 'cover'
      }}
    />
    
    <Link href={'/'} sx={{ display: 'block' }}>
    <Image
    src={'/bernietext.png'}
    sx={{
      width: 'calc(1024px - 4rem)',
      margin: '4rem auto',
      display: 'block'
    }}
    />
    </Link>
    <SkipNavLink>Skip to content</SkipNavLink>
    <Container>
      <Header />
      <Main id="skip-nav" css={css({ ...CodeStyles })} className={className}>
        {children}
      </Main>
      <Footer />
    </Container>
    <Link href={'/'} sx={{ display: 'block' }}>
    <Image
    src={'/bernietext.png'}
    sx={{
      width: 'calc(1024px - 4rem)',
      margin: '4rem auto',
      display: 'block'
    }}
    />
    </Link>
    <AspectImage
      ratio={16/3}
      src={'/bernie-bg.jpg'}
      sx={{
        height: '100%',
        width: '100%',
        objectFit: 'cover'
      }}
    />
  </Styled.root>
)

export default Layout
