import React from 'react';
import { useOlympics } from '../../data/context/OlympicsContext';
import Image from 'next/image';
import bg from '../../../assets/bg.png';
import parisLogo from '../../../assets/paris-2024-logo.svg';
import heroImg from '../../../assets/heroImg.png';


const HomePage = () => {
  const { events, loading, error } = useOlympics();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="flex bg-gray-100 justify-center items-center">
          <div className="w-full  flex flex-col items-center justify-center h-1/2 rounded-lg">
            <Image src={parisLogo} alt="Paris 2024 Logo" className=" w-1/4" />
            <p className='text-2xl'>Acompanhe as principais informações sobre</p>
            <h1 className='text-4xl font-weight-bold'>Jogos Olímpicos Paris 2024</h1>
          </div>
          <div className="w-full pt-36 h-1/2 rounded-lg">
             <Image src={heroImg} alt="Paris 2024 Logo" className=" w-3/4" />
          </div>
    </section>
  );
};

export default HomePage;