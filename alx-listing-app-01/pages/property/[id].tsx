import { useRouter } from 'next/router';
import { PROPERTYLISTINGSAMPLE } from '@/constants';
import PropertyDetail from '@/components/property/PropertyDetail';
import ReviewSection from '@/components/property/ReviewSection';

const PropertyPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find(item => item.name === id);

  if (!property) return <p className="p-6 text-red-500">Property not found</p>;

  // Mock review data
  const mockReviews = [
    {
      name: 'Bright',
      avatar: '/avatar1.png',
      rating: 5,
      comment: 'Amazing place! Would definitely come again.',
    },
    {
      name: 'Ada',
      avatar: '/avatar2.png',
      rating: 4,
      comment: 'Very comfortable and well located.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <PropertyDetail property={property} />
      <ReviewSection reviews={mockReviews} />
    </div>
  );
};

export default PropertyPage;
