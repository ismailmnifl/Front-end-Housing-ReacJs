import Card from 'src/components/Card';
import Hero from 'src/components/Hero';
import { useHouses } from 'src/hooks/useHouses';

function Home() {
  const { houses } = useHouses();

  return (
    <>
      <Hero />
      <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 text-white mx-6'>
        {houses.map((house) => (
          <Card key={house.id} house={house} />
        ))}
      </div>
    </>
  );
}

export default Home;
