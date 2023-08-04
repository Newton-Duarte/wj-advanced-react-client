import React from 'react';

import * as S from './styles';

import { Logo } from '../Logo';
import { Button } from '../Button';
import Container from '../Container';

const SectionHero = () => (
  <S.Wrapper>
    <Container>
      <Logo />

      <S.Content>
        <S.TextBlock>
          <S.Title>React Avançado</S.Title>
          <S.Description>
            Crie aplicações reais com NextJS, Strapi, GraphQL e mais!
          </S.Description>
          <S.Warning>⚠️ Atenção: Suporte ao curso finalizado!</S.Warning>
          <S.ButtonWrapper>
            <Button
              href="https://www.udemy.com/course/react-avancado/?couponCode=919B391DE80A8C55F233"
              wide
              onClick={() => {}}
            >
              Comprar
            </Button>
          </S.ButtonWrapper>
        </S.TextBlock>

        <S.Image
          src="/img/hero-illustration.svg"
          alt="Ilustração de um desenvolvedor em frente a um computador com várias linhas de código."
        />
      </S.Content>
    </Container>
  </S.Wrapper>
);

export default SectionHero;
