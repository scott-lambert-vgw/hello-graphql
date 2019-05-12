import * as React from 'react';
import gql from "graphql-tag";
import { Query } from 'react-apollo';

const HELLO_WORLD = gql`
  query Query {
    hello
  }
`;

export default function HelloWorld() {
  return (
    <Query<any, any> query={HELLO_WORLD}>
      {({data, loading, error}) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error!</div>;

        return <div>Hello, {data.hello}!</div>
      }}
    </Query>
  )
}