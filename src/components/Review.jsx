import React from 'react';
import { REVIEWS } from '../../Data';
import ReviewCard from './ReviewCard';

const Review = () => {
  return (
    <div className="p-4 bg-deepGreen mt-3">
      <h2 className="text-center text-xl font-light text-gray-300">Our customer reviews</h2>
      <h1 className="text-center text-2xl text-neonYellowGreen font-bold my-4">
        What our customers are saying <br /> about us
      </h1>

      <div className="reviewcard max-w-full mx-auto overflow-x-auto snap-x snap-mandatory no-scrollbar">
        <div className="flex gap-4">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="snap-center flex-shrink-0 w-[85%] md:w-[30%] mx-2 my-5"
            >
              <ReviewCard
                id={review.id}
                name={review.name}
                says={review.says.substring(0, 100)} // Short description
                image={review.image}
                occupation={review.occupation}
                rating={review.rating} // Ensure ratings like 3.5, 4, 5, etc.
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
