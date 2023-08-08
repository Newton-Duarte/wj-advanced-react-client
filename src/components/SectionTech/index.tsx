import React from 'react';

import Container from '../Container';
import { Heading } from '../Heading';
import * as S from './styles';
import { TechIconProps } from '@/types/api';
import { getImageUrl } from '@/utils/getImageUrl';

type Props = {
  title: string;
  techIcons: TechIconProps[];
};

export const SectionTech = ({ title, techIcons }: Props) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {techIcons.map(({ id, title, icon }) => (
          <S.Icon key={id}>
            <S.Icons
              src={getImageUrl(icon.data.attributes.url)}
              alt={title}
              loading="lazy"
            />
            <S.IconsName>{title}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
);
