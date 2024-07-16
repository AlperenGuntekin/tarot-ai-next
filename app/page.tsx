import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to AI Tarot</h1>
      <Link href="/reading">Get a Reading</Link>
    </div>
  );
};

export default HomePage;
