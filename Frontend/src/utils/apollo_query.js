import fetch from 'cross-fetch';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink(
    { uri: 'http://backend:8000/graphql', fetch }
  )
});

client
  .query({
    query: gql`
      query {
        accounts {
          username
        }
      }
    `
  })
  .then(result => console.log(result));
