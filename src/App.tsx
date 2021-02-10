import React from 'react';
import { ImgurProvider } from './context/imgur/imgurContext'
import './App.css';
import { CardContainer } from './components/CardContainer/CardContainer';

interface Props {
  message: string
}
const App: React.FC<Props> = (props) => {
  return (
    <ImgurProvider>
      <>
        <CardContainer />
        {props.children}
      </>
    </ImgurProvider>
  );
}

export default App;
