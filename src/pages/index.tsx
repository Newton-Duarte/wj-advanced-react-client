import SectionHero from '@/components/SectionHero';
import client from '@/graphql/client';
import { GET_LANDING_PAGE } from '@/graphql/queries/getLandingPage';
import { LandingPageProps, LandingPageResponse } from '@/types/api';
import { GetStaticProps } from 'next';

export default function Home({ logo }: LandingPageProps) {
  return (
    <>
      <SectionHero logo={logo} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request<LandingPageResponse>(
    GET_LANDING_PAGE
  );

  return {
    props: {
      logo: landingPage.data.attributes.logo.data.attributes,
    },
  };
};
