import React from 'react';

import * as S from './styles';
import { Button } from '../Button';

type Props = {
  totalPrice: number;
  priceInstallment: number;
  benefits: string;
  button: {
    label: string;
    url: string;
  };
};

export const PricingBox = ({
  totalPrice,
  priceInstallment,
  benefits,
  button,
}: Props) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>R$ {totalPrice}</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>R$ {priceInstallment}</S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList
      dangerouslySetInnerHTML={{
        __html: benefits,
      }}
    />

    <Button href={button.url} onClick={() => {}} withPrice>
      <p>{button.label}</p>
      <div>
        <S.ButtonDiscountPrice>R${priceInstallment}</S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
);
