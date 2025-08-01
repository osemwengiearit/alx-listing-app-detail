import React from 'react';
import Head from 'next/head';
import Pill from '@/components/ui/Pill';
import { PROPERTYLISTINGSAMPLE } from '@/constants';
import Image from 'next/image';
import PropertyCard from '@/components/cards/PropertyCard';

const filters = [
  'Top Villa',
  'Self Checkin',
  'Free WiFi',
  'Mountain View',
  'Private Pool',
  'Pet Friendly',
  'Beachfront',
  '24h Checkin',
];

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
        <meta
          name="description"
          content="Find the best properties around the world"
        />
      </Head>

      {/* Hero Section */}
      <section
        className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?villa,resort')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-4 md:px-10 py-6 bg-white">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <div className="flex flex-wrap gap-3">
          {filters.map((filter, idx) => (
            <Pill key={idx} label={filter} />
          ))}
        </div>
      </section>
    </>
  );
}

{
  /* Listing Section */
}
<section className="px-4 md:px-10 py-8 bg-gray-50">
  <h2 className="text-xl font-semibold mb-6">Explore Properties</h2>
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {PROPERTYLISTINGSAMPLE.map((property, index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]"
      >
        <Image
          src={property.image}
          alt={property.name}
          width={400} // or any value depending on layout
          height={300}
          className="w-full h-60 object-cover rounded-xl"
          unoptimized // optional: if the image is hosted externally and not optimized
        />

        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">{property.name}</h3>
            <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
              ⭐ {property.rating}
            </span>
          </div>
          <p className="text-sm text-gray-600">
            {property.address.city}, {property.address.country}
          </p>
          <p className="text-gray-800 font-bold mt-2">
            ${property.price.toLocaleString()}
            <span className="text-sm text-gray-500 font-medium"> / night</span>
          </p>
          {property.discount && (
            <p className="text-red-500 text-sm mt-1 font-semibold">
              {property.discount}% off!
            </p>
          )}
        </div>
      </div>
    ))}
  </div>
</section>;

{
  /* Property Listing Section */
}
<section className="px-4 md:px-10 py-6 bg-gray-50">
  <h2 className="text-xl font-semibold mb-4">Top Listings</h2>
  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {PROPERTYLISTINGSAMPLE.map((property, idx) => (
      <PropertyCard key={idx} property={property} />
    ))}
  </div>
</section>;
