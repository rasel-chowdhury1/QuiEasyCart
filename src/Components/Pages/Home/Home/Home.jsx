import React from 'react';
import Slider from '../Slider/Slider';
import Brand from '../Brand/Brand';
import TopRated from '../SpecialProducts/TopRated/TopRated';
import ParallexSection from '../ParallexSection.jsx/ParallexSection';
import SpecialProduct from '../SpecialProducts/SpecialProduct';
import BestOffer from '../BestOffer/BestOffer';
import Blog from '../Blog/Blog';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Brand></Brand>
            <TopRated></TopRated>
            <ParallexSection></ParallexSection>
            <BestOffer></BestOffer>
            <SpecialProduct ></SpecialProduct>
            <Blog />
            <Newsletter />
        </div>
    );
};

export default Home;