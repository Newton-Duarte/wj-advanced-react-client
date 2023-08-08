import React from 'react';

import * as S from './styles';
import Container from '../Container';
import { Heading } from '../Heading';

type Props = {
  title: string;
  concepts: {
    id: string;
    title: string;
  }[];
};

export const SectionConcepts = ({ title, concepts }: Props) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{title}</Heading>
      <S.List>
        {concepts.map((concept) => (
          <S.Item key={concept.id}>{concept.title}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
);
