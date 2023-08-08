export type LogoProps = {
  alternativeText: string;
  url: string;
};

export type LandingPageProps = {
  logo: LogoProps;
  header: HeaderProps;
  about: SectionAboutProjectProps;
  sectionTech: SectionTechProps;
  sectionConcepts: SectionConceptsProps;
  sectionModules: SectionModulesProps;
  sectionAgenda: SectionAgendaProps;
  pricingBox: PricingBoxProps;
};

export type LandingPageResponse = {
  landingPage: {
    data: {
      id: string;
      attributes: {
        logo: LogoResponse;
        header: HeaderProps;
        sectionAboutProject: SectionAboutProjectProps;
        sectionTech: SectionTechProps;
        sectionConcepts: SectionConceptsProps;
        sectionModules: SectionModulesProps;
        sectionAgenda: SectionAgendaProps;
        pricingBox: PricingBoxProps;
      };
    };
  };
};

export type LogoResponse = {
  data: {
    attributes: {
      alternativeText: string;
      url: string;
    };
  };
};

export type HeaderProps = {
  title: string;
  description: string;
  button: {
    label: string;
    url: string;
  };
  image: {
    data: {
      attributes: {
        alternativeText: string;
        url: string;
      };
    };
  };
};

export type SectionAboutProjectProps = {
  title: string;
  description: string;
  image: {
    data: {
      attributes: {
        alternativeText: string;
        url: string;
      };
    };
  };
};

export type TechIconProps = {
  id: string;
  title: string;
  icon: {
    data: {
      attributes: {
        alternativeText: string;
        url: string;
      };
    };
  };
};

export type SectionTechProps = {
  title: string;
  techIcons: TechIconProps[];
};

export type SectionConceptsProps = {
  title: string;
  concepts: {
    id: string;
    title: string;
  }[];
};

export type SectionModulesProps = {
  title: string;
  modules: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
  }[];
};

export type SectionAgendaProps = {
  title: string;
  description: string;
};

export type PricingBoxProps = {
  totalPrice: number;
  priceInstallment: number;
  benefits: string;
  button: {
    label: string;
    url: string;
  };
};
