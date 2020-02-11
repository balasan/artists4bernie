/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "./layout"
import SEO from "./seo"
import { graphql } from "gatsby";

type PageProps = {
  data: {
    page: {
      title: string
      slug: string
      excerpt: string
      body: string
    }
  }
}

const Page = ({ data }: PageProps) => {
  const {page} = data;
  return <Layout>
    <SEO title={page.title} description={page.excerpt} />
    <Styled.h2>{page.title}</Styled.h2>
    <section sx={{ my: 5 }}>
      <MDXRenderer>{page.body}</MDXRenderer>
    </section>
  </Layout>
}

// export const query = graphql`
//   query {
//     allGoogleSpreadsheetSheet2 {
//       edges {
//         node {
//           about
//         }
//       }
//     }
//   }
// `;

export default Page
