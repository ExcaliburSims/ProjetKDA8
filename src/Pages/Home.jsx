import React from 'react';
import Header from '../Components/Header/Header';
import Section1 from '../Components/section/section1';
import API from '../API/Api';

const Home = () => {
    return (
        <div>
          <Header/>
          <Section1/>
          <API/>
        </div>
    );
};

export default Home;
