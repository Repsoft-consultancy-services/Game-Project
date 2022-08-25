import Image from 'next/image';
import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import RatingSlider from './RatingSlider';


const Rating = () => {
    const [rating, setRating] = useState(4.5)
    return (
        <div className='w-full xl:w-[80rem] 2xl:w-[100rem] 3xl:w-[150rem] my-20'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-4xl font-bold'>Our Clients</h1>
                </div>
                <div className='text-4xl items-center font-bold flex space-x-10'>
                    <h1>9.7/10</h1>
                    <StarRatings
                        rating={rating}
                        starRatedColor="black"
                        changeRating={false}
                        numberOfStars={5}
                        name='rating'
                        starDimension="40px"
                        starSpacing="0px"
                    />
                </div>
            </div>
                <RatingSlider></RatingSlider>
        </div>
    );
};

export default Rating;