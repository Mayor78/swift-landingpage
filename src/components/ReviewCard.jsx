import React from 'react';
import { GiAlliedStar } from 'react-icons/gi';
import { FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; // Import icons for half and empty stars

const ReviewCard = ({ image, name, occupation, says, rating }) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<GiAlliedStar key={i} className="text-yellow-400" />);
    }

    // Add half star if applicable
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }

    // Add empty stars to make up to 5
    while (stars.length < 5) {
      stars.push(<FaRegStar key={stars.length} className="text-yellow-400" />);
    }

    return stars;
  };

  return (
    <div className="card-review bg-black h-[13rem] p-4 rounded-lg text-white">
      <div className="flex items-center gap-3 mb-3">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div className="flex-grow">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-300">{occupation}</p>
        </div>
        <div className="flex items-center">
          {renderStars()}
        </div>
      </div>
      <p className="text-[14px] leading-tight">{says}</p>
    </div>
  );
};

export default ReviewCard;
