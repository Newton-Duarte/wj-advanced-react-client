import React from 'react';
import * as S from './styles';
import { LogoProps } from '@/types/api';
import { getImageUrl } from '@/utils/getImageUrl';

type Props = LogoProps;

export const Logo = ({ url, alternativeText }: Props) => (
  <S.LogoWrapper src={getImageUrl(url)} alt={alternativeText} />
);
