import React from 'react';
import Slider from '../Slider/Slider';
import Brand from '../Brand/Brand';
import TopRated from '../SpecialProducts/TopRated/TopRated';
import ParallexSection from '../ParallexSection.jsx/ParallexSection';
import SpecialProduct from '../SpecialProducts/SpecialProduct';
import BestOffer from '../BestOffer/BestOffer';
import Blog from '../Blog/Blog';
import Newsletter from '../Newsletter/Newsletter';
import CategoryLogo from '../CategoryLogo/CategoryLogo';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Brand></Brand>
            <CategoryLogo></CategoryLogo>
            <BestOffer></BestOffer>
            <ParallexSection></ParallexSection>
            <SpecialProduct ></SpecialProduct>
            <Blog />
            <Newsletter />
        </div>
    );
};

export default Home;