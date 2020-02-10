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
    <p>
      <Flex mt={4} sx={{ flexWrap: "wrap" }}>
        {data.allGoogleSpreadsheetSheet1.edges.map(({ node }) => (
          <Box display={"flex"} flex={"auto"} pr={4} key={node.id}>
            {node.name}
          </Box>
        ))}
      </Flex>
    </p>
  );
});

export const Count = withData(({ data }) => (
  <Fragment>{data.allGoogleSpreadsheetSheet2.edges[0].node.count}</Fragment>
));
