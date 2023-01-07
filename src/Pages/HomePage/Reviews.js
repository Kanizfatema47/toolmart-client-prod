import React, { useEffect, useState } from 'react';
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Reviews = () => {
    const [review,setReview] = useState([]);


    useEffect(() => {
        fetch("https://gold-beautiful-kingfisher.cyclic.app/review")
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])
    return (
      <div className='my-24 h-1/2 '>
        <h3 className="text-3xl text-center pb-5 uppercase">User Reviews</h3>
       
           <AwesomeSlider className='h-1/2'>
               {review.map((review) => (
                 <p className='text-white text-3xl'>{review.message}</p>
           
               ))}
       
          </AwesomeSlider>
        
     
      </div>
    );
};

export default Reviews;

