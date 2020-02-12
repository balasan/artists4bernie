import React, { Fragment } from "react";
import { StaticQuery, graphql } from "gatsby";
import { Flex, Box } from "@theme-ui/components";

const query = graphql`
  query {
    allGoogleSpreadsheetSheet1 {
      edges {
        node {
          name
        }
      }
    }
    allGoogleSpreadsheetSheet2 {
      edges {
        node {
          count
        }
      }
    }
  }
`;

const withData = WrappedComponent => props => (
  <StaticQuery
    query={query}
    render={data => <WrappedComponent {...props} data={data} />}
  />
);

export const Signatures = withData(({ data }) => {
  return (
      <ul mt={4}>
        {data.allGoogleSpreadsheetSheet1.edges.map(({ node }) => (
          <li pr={4} key={node.id}>
            {node.name}
            <hr/>
          </li>
        ))}
      </ul>
  );
});

export const Count = withData(({ data }) => (
  <Fragment>{data.allGoogleSpreadsheetSheet2.edges[0].node.count}</Fragment>
));
