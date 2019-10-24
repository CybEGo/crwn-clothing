import React from 'react';

import Directory from '../../components/Directory/Directory';

import { HomePageContainer } from './HomePageContainer';

// import './HomePage.scss';

const HomePage = () => {
  return (
    // <div className='homepage'>
    //   <Directory />
    // </div>
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;