import React from 'react';
import { useOlympics } from '../../data/context/OlympicsContext';
import Image from 'next/image';
import bg from '../../../assets/bg.png';

const HomePage = () => {
  const { events, loading, error } = useOlympics();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="relative">
    <Image src={bg} fill alt="Background" className="object-cover -z-30" />
    <div className=" h-[100vh] sm:bg-transparent sm:bg-gradient-to-r from-white/10 via-white/10 to-white/10">
        <div className="container py-10">
          <h1 className="text-3xl font-bold text-center text-white"> Ola </h1>
        </div>
    </div>
    </div>
  );
};

export default HomePage;
