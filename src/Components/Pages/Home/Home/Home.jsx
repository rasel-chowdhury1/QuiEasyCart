import React from 'react';
import Slider from '../Slider/Slider';
import Brand from '../Brand/Brand';
import TopRated from '../SpecialProducts/TopRated/TopRated';
import Blog from '../Blog/Blog';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Brand></Brand>
            <TopRated></TopRated>
            <Blog />
            <Newsletter />
        </div>
    );
};

export default Home;