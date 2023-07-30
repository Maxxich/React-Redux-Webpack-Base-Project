import * as React from 'react';
import './index.scss'
import Button from 'shared/Button/Button'

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <h1>Render App</h1>
      <Button/>
    </>
  );
};

export default App;
