import React, { Fragment } from "react";
import { StaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    allGoogleSpreadsheetSheet2 {
      edges {
        node {
          about
        }
      }
    }
  }
`;

export default () => (
  <StaticQuery
    query={query}
    render={data => (
      <Fragment>{data.allGoogleSpreadsheetSheet2.edges[0].node.about}</Fragment>
    )}
  />
);
