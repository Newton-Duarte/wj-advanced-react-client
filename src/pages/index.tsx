import { SectionAboutProject } from '@/components/SectionAboutProject';
import { SectionAgenda } from '@/components/SectionAgenda';
import { SectionConcepts } from '@/components/SectionConcepts';
import { SectionHero } from '@/components/SectionHero';
import { SectionModules } from '@/components/SectionModules';
import { SectionTech } from '@/components/SectionTech';
import client from '@/graphql/client';
import { GET_LANDING_PAGE } from '@/graphql/queries/getLandingPage';
import { LandingPageProps, LandingPageResponse } from '@/types/api';
import { GetStaticProps } from 'next';

export default function Home({
  logo,
  header,
  about,
  sectionTech,
  sectionConcepts,
  sectionModules,
  sectionAgenda,
}: LandingPageProps) {
  return (
    <>
      <SectionHero logo={logo} header={header} />
      <SectionAboutProject about={about} />
      <SectionTech {...sectionTech} />
      <SectionConcepts {...sectionConcepts} />
      <SectionModules {...sectionModules} />
      <SectionAgenda {...sectionAgenda} />
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
      header: landingPage.data.attributes.header,
      about: landingPage.data.attributes.sectionAboutProject,
      sectionTech: landingPage.data.attributes.sectionTech,
      sectionConcepts: landingPage.data.attributes.sectionConcepts,
      sectionModules: landingPage.data.attributes.sectionModules,
      sectionAgenda: landingPage.data.attributes.sectionAgenda,
    },
  };
};
