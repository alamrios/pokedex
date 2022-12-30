// Step 1: Import React
import * as React from 'react';
import PokemonsView from '../views/PokemonsView';
import Styled from '../components/styled';
import { QueryClient, QueryClientProvider } from "react-query";

const IndexPage: React.FC = () => {

  const client = new QueryClient();

  return (
    <Styled.Container>
      <QueryClientProvider client={client}>
        <PokemonsView/>
      </QueryClientProvider>
    </Styled.Container>
  );
};

export const Head = () => <title>Pok&eacute;dex</title>;

export default IndexPage;