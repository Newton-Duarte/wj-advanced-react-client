import * as S from './styles';
import Container from '../Container';
import { Heading } from '../Heading';
import { SectionAboutProjectProps } from '@/types/api';
import { getImageUrl } from '@/utils/getImageUrl';

type Props = {
  about: SectionAboutProjectProps;
};

export const SectionAboutProject = ({ about }: Props) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image>
          <source
            srcSet={getImageUrl(about.image.data.attributes.url)}
            type="image/webp"
          />
          <source
            srcSet={getImageUrl(about.image.data.attributes.url)}
            type="image/png"
          />
          <img
            src={getImageUrl(about.image.data.attributes.url)}
            loading="lazy"
            alt={about.image.data.attributes.alternativeText}
          />
        </S.Image>
        <div>
          <Heading>O que iremos construir</Heading>
          <S.Text
            dangerouslySetInnerHTML={{ __html: about.description }}
          ></S.Text>
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
);
