import React from 'react';
import styled from 'styled-components';
import ResultsPage from './pages/ResultsPage';


const AppContainer = styled.div`
  height: 100%;
  width: 100%;
`;

function App() {
  return (
    <AppContainer>
      <ResultsPage />
    </AppContainer>
  );
}

export default App;
