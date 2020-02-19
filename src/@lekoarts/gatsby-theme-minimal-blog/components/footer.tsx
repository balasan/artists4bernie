/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { AspectImage, AspectRatio, Image, Link } from "@theme-ui/components";
import useSiteMetadata from "../hooks/use-site-metadata"

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <Image
        mt={5}
        src="/bernie.png"
        sx={{
          width: '320px',
          ml: 'auto',
          mr: 'auto',
          mb: '64px',
          clear: 'both',
          display: 'block'
        }}
        />
      <div
      sx={{
      textAlign: `center`
      }}
      >
        &copy; {new Date().getFullYear()} by {siteTitle}. All rights reserved.<br/>
        The Artists4Bernie initiative is not a part of the official Bernie Sanders Campaign.
      </div>
    </footer>
  )
}

export default Footer
