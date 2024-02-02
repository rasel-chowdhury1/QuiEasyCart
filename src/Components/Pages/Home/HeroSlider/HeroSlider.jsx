import React from 'react';
import img1 from '../../../../assets/01.jpg'
import img2 from '../../../../assets/02.jpg'
import img3 from '../../../../assets/03.png'
import img4 from '../../../../assets/04.jpg'
import Slider from "react-slick";
import image1 from '../../../../assets/rbigsell.png'
import image2 from '../../../../assets/rbanner2.png'
import image3 from '../../../../assets/rbanner3.png'

const ImageList = [
    {
        id: 1,
        img: image1,
        title: 'Upto 30% off on all Mens Wear',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias est atque aliquid ipsum maxime quo dicta unde, illum sint nesciunt.'
    },
    {
        id: 2,
        img: image2,
        title: 'Upto 50% off on all womens Wear',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias est atque aliquid ipsum maxime quo dicta unde, illum sint nesciunt.'
    },
    {
        id: 3,
        img: image3,
        title: '70% off on all Products Sale',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias est atque aliquid ipsum maxime quo dicta unde, illum sint nesciunt.'
    },
]

const HeroSlider = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'ease-in-out',
        pauseOnHover: false,
        pauseOnFocus: true
      };

    return (
        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
            {/** background pattern */}
            <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>

            </div>
            {/** hero section */}
            <div className='container pb-8 sm:pb-0'>
                <Slider {...settings}>
                    {
                        ImageList.map((item) =>(
                            <div key={item.id}>
                        <div className='grid grid-cols-1 sm:grid-cols-2'>
                            {/** text content section */}
                        <div
                        className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                            <h1 
                                data-aos='zoom-out'
                                data-aos-duration='500'
                                data-aos-once='true'
                              className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                                {item.title}
                            </h1>
                            <p 
                             data-aos='fade-up'
                             data-aos-duration='500'
                             data-aos-delay='100'
                             className='text-sm'>
                                {item.description}
                            </p>
                            <div
                              data-aos='fade-up'
                              data-aos-duration='500'
                              data-aos-delay='300'
                            >
                                <button
                                className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>Order Now</button>
                            </div>
                        </div>

                        {/** image section */}
                        <div className='order-1 sm:order-2 '>
                            <div 
                              data-aos='zoom-in'
                              data-aos-once = 'true'
                              className='relative z-10 '>
                                <img src={item.img} alt="bannerImage" 
                                className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 lg:scale-120 object-contain mx-auto '/>
                            </div>
                        </div>
                        </div>
                            </div>
                        ))
                    }
                </Slider>
                
                
            </div>
        </div>
    );
};

export default HeroSlider;