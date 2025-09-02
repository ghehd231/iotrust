import styled from '@emotion/styled';

import { Banner } from '../../types/data';

import BannerSwiper from '../swiper/BannerSwiper';

const Section = styled.section``;

type Props = {
  banners: Banner[];
};
const BannerSection = ({ banners }: Props) => {
  return (
    <Section>
      <BannerSwiper banner={banners} />
    </Section>
  );
};

export default BannerSection;
