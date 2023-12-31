import React from 'react';
import Slider from '../Slider/Slider';
import Brand from '../Brand/Brand';
import TopRated from '../SpecialProducts/TopRated/TopRated';
import BestSale from '../SpecialProducts/BestSale/BestSale';
import SpecialProduct from '../SpecialProducts/SpecialProduct';
import BestOffer from '../BestOffer/BestOffer';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Brand></Brand>
            <BestOffer></BestOffer>
            <SpecialProduct ></SpecialProduct>
        </div>
    );
};

export default Home;