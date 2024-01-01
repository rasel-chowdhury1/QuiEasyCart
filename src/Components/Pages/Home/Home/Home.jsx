import React from 'react';
import Slider from '../Slider/Slider';
import Brand from '../Brand/Brand';
import TopRated from '../SpecialProducts/TopRated/TopRated';
import ParallexSection from '../ParallexSection.jsx/ParallexSection';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Brand></Brand>
            <TopRated></TopRated>
            <ParallexSection></ParallexSection>
        </div>
    );
};

export default Home;