import React from 'react';
import styled from 'styled-components';
import ResultsPage from './pages/ResultsPage';


const AppContainer = styled.div`
  width: 100%;
`;

function App() {
  return (
    <AppContainer>
      {/* Router and routes wouls usually go here */}
      <ResultsPage />
    </AppContainer>
  );
}

export default App;
