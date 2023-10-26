import React from 'react'
import "./Body.css"
import buttonSvg from "./Assets/PlusButton.svg"
import suiteCase from "./Assets/Suitcase.svg"
import balance from "./Assets/Balance.svg"
import heart from "./Assets/Heart.svg"
import other from "./Assets/Other.svg"
import { Link } from 'react-router-dom';

import { ProfileContext } from '../../Profile/Profile';
import { LightModeContext } from '../../LightMode/LightModeProvider';

function TimeLine({ timeLine }) {

  return (
    timeLine.map((item) =>
      <div className='BodyContainerText' key={item.id}>
        <p>Age: {item.age} years old</p>
        <span>{item.event}</span>
      </div>
    )
  );
}

export const Body = () => {
  const { profile, setProfile } = React.useContext(ProfileContext);
  const { lightMode } = React.useContext(LightModeContext);
  const containerRef = React.useRef(null);  // Ajoutez ceci

  const lightModeClass = {
    color: lightMode ? "black" : "white",
    borderColor: lightMode ? "black" : "#435C84",
  };

  const ageButton = () => {
    setProfile(prev => ({
      ...prev,
      age: prev.age + 1,
      timeLine: [...prev.timeLine, { age: prev.age, event: "Ishhhh", id: prev.timeLine.length }]
    }));
  };

  React.useEffect(() => {  // Ajoutez ceci
    const containerElement = containerRef.current;
    if (containerElement) {
      containerElement.scrollTop = containerElement.scrollHeight;
    }
  }, [profile.timeLine]);

  return (
    <>
      <div className='BodyContainer' style={lightModeClass} ref={containerRef}>
        <TimeLine timeLine={profile.timeLine} />
      </div>
      <div className='BodyButton'>
        <button onClick={ageButton}>
          <Link to="/game">
            <img src={suiteCase} alt='Suitcase' height="50px" width="auto" />
          </Link>
        </button>
        <button onClick={ageButton}>
          <img src={balance} alt='Balance' height="50px" width="auto" />
        </button>
        <button onClick={ageButton}>
          <img src={buttonSvg} alt='PlusButtonSvg' height="70px" width="auto" id='PlusButton' />
        </button>
        <button onClick={ageButton}>
          <img src={heart} alt='Heart' height="50px" width="auto" />
        </button>
        <button onClick={ageButton}>
          <img src={other} alt='Other' height="50px" width="auto" />
        </button>
      </div>
    </>
  );
}

