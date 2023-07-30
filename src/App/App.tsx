import { Suspense, useState } from 'react';
import './index.scss'
import Button from 'shared/Button/Button'
import { ButtonAsync } from 'shared/Button/Button.async';
import Photo from 'shared/assets/images/images.jpg'
import Icon from 'shared/assets/svg/svg.svg'

interface IAppProps {
}


const App: React.FunctionComponent<IAppProps> = (props) => {
  const [showButton, setShowButton] = useState<boolean>(false)
  const handleClick = () => {
    setShowButton(true)
  }
  
  return (
    <>
      <h1 onClick={handleClick}>Render App for</h1>
      {
        showButton
        &&
        <Suspense fallback="...Loading">
          <ButtonAsync/>
        </Suspense>
      }
      <img src={Photo}/>
      <Icon/>
    </>
  );
};

export default App;
