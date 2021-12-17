import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://65.0.169.168/graphql',
  cache: new InMemoryCache(),
});
