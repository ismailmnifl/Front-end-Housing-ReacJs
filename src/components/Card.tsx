import { HeartFilledIcon, HeartIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { toggleLike } from 'src/app/features/likeSlice';
import { useAppDispatch } from 'src/app/hooks';
import { IHouse } from 'src/hooks/useHouses';

const Card = ({ house }: { house: IHouse }) => {
  const dispatch = useAppDispatch();
  const [isLiked, setLike] = useState(false);

  const handleLike = () => {
    dispatch(toggleLike(house));
    setLike(!isLiked);
  };

  return (
    <div key={house.id} className='relative'>
      <img
        src={house.image}
        loading='lazy'
        alt={house.address}
        className='w-full h-full grayscale object-cover object-center'
      />
      {isLiked ? (
        <HeartFilledIcon
          className='w-6 h-6 absolute top-2 right-2 cursor-pointer'
          onClick={handleLike}
        />
      ) : (
        <HeartIcon
          onClick={handleLike}
          className='w-6 h-6 absolute top-2 right-2 cursor-pointer'
        />
      )}
      <div className='flex absolute items-center justify-between bottom-2 w-full px-2'>
        <span className='text-sm font-bold'>${house.price}</span>
        <span className='text-sm font-semibold'>{house.address}</span>
      </div>
    </div>
  );
};

export default Card;
