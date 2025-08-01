import { PropertyProps } from '@/interfaces';
import BookingSection from './BookingSection';
import Image from 'next/image';

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({
  property,
}) => {
  return (
    <div className="container mx-auto p-6">
      {/* Property Name & Info */}
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-500">{property.rating} stars</span>
        <span>
          {property.address.city}, {property.address.country}
        </span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <Image
          src={property.image}
          alt={property.name}
          width={800}
          height={600}
          className="w-full h-96 object-cover rounded-lg col-span-2"
        />
      </div>

      {/* Description + Booking Layout */}
      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        {/* Left Side - Description & Amenities */}
        <div className="lg:w-2/3">
          {/* Description */}
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Description</h2>
            <p>{property.description}</p>
          </div>

          {/* Amenities */}
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">What this place offers</h2>
            <ul className="flex flex-wrap gap-2 mt-2">
              {property.category.map((amenity, index) => (
                <li key={index} className="bg-gray-200 p-2 rounded-md">
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side - Booking */}
        <div className="lg:w-1/3">
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
