import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://13.126.91.139/graphql',
  cache: new InMemoryCache(),
});
