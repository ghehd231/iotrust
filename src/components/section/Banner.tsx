import styled from '@emotion/styled';
import { Banner } from '@/types/data';

import BannerSwiper from '@/components/swiper/BannerSwiper';

const Section = styled.section`
  border-bottom: 2px solid #f8f9fa;
  &:last-of-type {
    border-bottom: none;
  }
`;

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
