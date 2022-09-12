import Image from 'next/image';
import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import RatingSlider from './RatingSlider';


const Rating = () => {
    const [rating, setRating] = useState(4.5)
    return (
        <div className='w-full 2xl:w-[92rem] 2xl:mx-auto my-20'>
            <div className='flex flex-col lg:flex-row items-center justify-between'>
                <div>
                    <h1 className='text-2xl lg:text-4xl font-bold'>Our Clients</h1>
                </div>
                <div className='text-2xl lg:text-4xl flex items-center font-bold space-x-5 lg:space-x-10'>
                    <h1>9.7/10</h1>
                    <div className='hidden lg:block'>
                        <StarRatings
                            rating={rating}
                            starRatedColor="black"
                            numberOfStars={5}
                            name='rating'
                            starDimension="40px"
                            starSpacing="0px"
                        />
                    </div>
                    <div className='block lg:hidden'>
                        <StarRatings
                            rating={rating}
                            starRatedColor="black"
                            numberOfStars={5}
                            name='rating'
                            starDimension="30px"
                            starSpacing="0px"
                        />
                    </div>
                </div>
            </div>
            <RatingSlider></RatingSlider>
        </div>
    );
};

export default Rating;