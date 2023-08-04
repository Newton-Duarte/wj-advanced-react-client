export type LogoProps = {
  alternativeText: string;
  url: string;
};

export type LandingPageProps = {
  logo: LogoProps;
};

export type LandingPageResponse = {
  landingPage: {
    data: {
      id: string;
      attributes: {
        logo: LogoResponse;
        createdAt: string;
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
