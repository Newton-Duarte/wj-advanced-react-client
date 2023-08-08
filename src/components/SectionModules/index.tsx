import React from 'react';

import * as S from './styles';
import Container from '../Container';
import { Heading } from '../Heading';
import { CardModule } from '../CardModule';

type Props = {
  title: string;
  modules: {
    title: string;
    subtitle: string;
    description: string;
  }[];
};

export const SectionModules = ({ title, modules }: Props) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {modules.map(({ title, subtitle, description }, index) => (
        <CardModule key={index} title={title} subTitle={subtitle}>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </CardModule>
      ))}
    </S.Content>
  </Container>
);
