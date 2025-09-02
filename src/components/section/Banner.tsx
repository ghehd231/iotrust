import styled from '@emotion/styled';

import useDiscoveryStore from '../../store/discoveryStore';

import BannerSwiper from '../swiper/BannerSwiper';

const Section = styled.section``;

const BannerSection = () => {
  const { banners } = useDiscoveryStore();
  return (
    <Section>
      <BannerSwiper banner={banners} />
    </Section>
  );
};

export default BannerSection;
