import React from 'react';

import * as S from './styles';

import { Logo } from '../Logo';
import { Button } from '../Button';
import Container from '../Container';
import { HeaderProps, LogoProps } from '@/types/api';
import { getImageUrl } from '@/utils/getImageUrl';

type Props = {
  logo: LogoProps;
  header: HeaderProps;
};

const SectionHero = ({ logo, header }: Props) => (
  <S.Wrapper>
    <Container>
      <Logo {...logo} />

      <S.Content>
        <S.TextBlock>
          <S.Title>{header.title}</S.Title>
          <S.Description>{header.description}</S.Description>
          <S.Warning>⚠️ Atenção: Suporte ao curso finalizado!</S.Warning>
          <S.ButtonWrapper>
            <Button href={header.button.url} wide onClick={() => {}}>
              {header.button.label}
            </Button>
          </S.ButtonWrapper>
        </S.TextBlock>

        <S.Image
          src={getImageUrl(header.image.data.attributes.url)}
          alt={header.image.data.attributes.alternativeText}
        />
      </S.Content>
    </Container>
  </S.Wrapper>
);

export default SectionHero;
