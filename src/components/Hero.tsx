import Title from './Title';
import ViewAllButton from './ViewAllButton';

function Hero() {
  return (
    <div className='flex items-center justify-evenly flex-wrap w-[100%] mt-10 mb-10'>
      <Title />
      <ViewAllButton />
    </div>
  );
}

export default Hero;
