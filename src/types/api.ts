export type LogoProps = {
  alternativeText: string;
  url: string;
};

export type LandingPageProps = {
  logo: LogoProps;
  header: HeaderProps;
  about: SectionAboutProjectProps;
  sectionTech: SectionTechProps;
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
