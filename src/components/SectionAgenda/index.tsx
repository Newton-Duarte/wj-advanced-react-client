import React from 'react';

import * as S from './styles';
import Container from '../Container';
import { Heading } from '../Heading';

type Props = {
  title: string;
  description: string;
};

export const SectionAgenda = ({ title, description }: Props) => (
  <Container id="agenda">
    <Heading reverseColor>{title}</Heading>
    <S.Text
      dangerouslySetInnerHTML={{
        __html: description,
      }}
    />
  </Container>
);
