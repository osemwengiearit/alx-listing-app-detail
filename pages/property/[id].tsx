import { GetStaticPaths, GetStaticProps } from 'next';
import PropertyDetail from '@/components/property/PropertyDetail';
import { PropertyProps } from '@/interfaces';
import { PROPERTYLISTINGSAMPLE } from '@/constants';

interface PropertyPageProps {
  property: PropertyProps;
}

const PropertyPage = ({ property }: PropertyPageProps) => {
  return <PropertyDetail property={property} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = PROPERTYLISTINGSAMPLE.map(property => ({
    params: { id: property.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const property = PROPERTYLISTINGSAMPLE.find(
    p => p.id.toString() === params?.id
  );

  return { props: { property } };
};

export default PropertyPage;
