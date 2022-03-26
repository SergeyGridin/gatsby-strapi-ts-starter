import React from 'react';

interface HomeProps {
  hello: string;
}

const HomePage: React.FC<HomeProps> = () => {
  return <div>HomePage</div>;
};

export default HomePage;
