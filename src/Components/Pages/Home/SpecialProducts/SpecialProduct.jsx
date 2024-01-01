import React, { useState } from 'react';
import TopRated from './TopRated/TopRated';
import BestSale from './BestSale/BestSale';

const SpecialProduct = () => {
    const [showingComponent, setShowingComponent] = useState(false)

    const handleComponent = (e) =>{
        setShowingComponent(true)
        const findingBest = document.querySelector('.component-overlay')
        findingBest.style.transform = 'scale(0)';
    }

    return (
        <div className='mt-16'>

            <h4 className='text-center exclusive-title'>Exclusive Products</h4>
            <h1 className="text-center text-2xl font-bold exclusive-sub-title">SPECIAL PRODUCTS </h1>
            <article className="text-sm text-center mt-6 text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.<br/> Lorem Ipsum has been the industry's 
            standard dummy text ever since the <br />1500s.
            </article>

            <div className="flex justify-center mt-9">
            <span onClick={()=>setShowingComponent(false)} className={showingComponent?" text-2xl topBtn cursor-pointer font-medium": " text-2xl text-rose-400 topBtn cursor-pointer font-medium"}>TOP RATED</span> 
            <span onClick={handleComponent} className={showingComponent?'ml-12 text-2xl text-rose-400 font-medium cursor-pointer':'ml-12 text-2xl font-medium cursor-pointer'}>BEST SALE</span>
            </div>

            {
                showingComponent ? <BestSale className=''></BestSale> : <TopRated className=''></TopRated>
            }
        </div>

        
    );
};

export default SpecialProduct;