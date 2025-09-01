import styled from '@emotion/styled';

import { Banner } from '../../types/data';

import BannerSwiper from '../swiper/BannerSwiper';

const Section = styled.section``;

type Props = {
  banner: Banner[];
};

const BannerSection = ({ banner }: Props) => {
  return (
    <Section>
      <BannerSwiper banner={banner} />
    </Section>
  );
};

export default BannerSection;
