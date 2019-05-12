import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:4000/"
});
export const client = new ApolloClient({
  cache,
  link
});

client
  .query({
    query: gql`
      query Query {
        hello
      }
    `
  })
  .then(result => console.log(result));
