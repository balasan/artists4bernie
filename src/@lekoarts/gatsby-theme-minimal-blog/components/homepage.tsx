/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Layout from "./layout"
// @ts-ignore
import Hero from "../texts/hero"
// @ts-ignore
import Bottom from "../texts/bottom"
import Title from "./title"
import Listing from "./listing"
import List from "./list"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import replaceSlashes from "../utils/replaceSlashes"

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    tags?: {
      name: string
      slug: string
    }[]
  }[]
}

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig()

  return (
    <Layout>
      <section sx={{ mb: [5, 6, 7], p: { fontSize: [1, 2, 3], mt: 2, lineHeight: 1.33 }, ul:{ m: 0, p: 0}, li: { "::before": {ml: 4}, listStyleType: `none`, pl: 0, pt: 1, pb: 1,  width: [`50%`,`33.333%`], display: `inline-block`,} }}>
        <Hero />
      </section>
      <List>
        <Bottom />
      </List>
    </Layout>
  )
}

export default Homepage
