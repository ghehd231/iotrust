import styled from '@emotion/styled';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import { Banner } from '@/types/data';

import 'swiper/css';
import 'swiper/css/pagination';

// Swiper 페이지네이션 커스텀 스타일 (전역 또는 컴포넌트 스코프)
const SwiperContainer = styled.div`
  position: relative;
  width: 100%;

  overflow: hidden;

  // Swiper 기본 페이지네이션 점들을 숨김 (사용하지 않을 것이므로)
  .swiper-pagination-bullet {
    display: none;
  }

  // 커스텀 페이지네이션 스타일 (오른쪽 하단에 'N/M' 형식으로 표시)
  .swiper-pagination-custom {
    position: absolute;
    bottom: 10px;
    right: 0px;
    left: 59%;
    width: auto;
    color: #fff;
    font-size: 14px;
    z-index: 10;
    padding: 5px 10px;
    border-radius: 15px;
  }
`;

// 각 슬라이드 컨텐츠를 담는 래퍼 (이미지와 텍스트를 함께 관리)
const SlideWrapper = styled.div`
  position: relative; // 자식 요소들의 absolute 포지셔닝 기준
  width: 100%;
  height: 180px;

  overflow: hidden;
  display: flex;
  align-items: center;

  // D'CENT 로고 (배경 이미지처럼)
  &::after {
    content: '';
    position: absolute;
    right: -30px;
    bottom: -30px;
    width: 150px;
    height: 150px;
    background-image: url('/path/to/dcent_logo.png'); /* 디센트 로고 이미지 경로 */
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.3; /* 투명도 조절 */
    z-index: 2; // 이미지와 텍스트보다 위
  }
`;

const BannerImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  z-index: 1;
`;

const TextButtonContainer = styled.div`
  position: relative;
  z-index: 3;
  padding: 20px;
  display: flex;
  flex-direction: column;
  color: #fff;
  height: 100%;
  align-items: flex-start;
  justify-content: space-evenly;
`;

const BannerTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  line-height: 1.4;
`;

const CtaButton = styled.button`
  padding: 10px 20px;
  border-radius: 16px;
  border: none;
  background-color: #fff;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  align-self: flex-start;
`;

type Props = {
  banner: Banner[];
};

const BannerSwiper = ({ banner }: Props) => {
  const currentLang = 'ko';

  const handleBannerClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <SwiperContainer>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{
          clickable: true,
          type: 'custom',
          renderCustom: function (
            swiper: SwiperClass,
            current: number,
            total: number
          ) {
            return `<div class="swiper-pagination-custom">${current} / ${total}</div>`;
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        initialSlide={0}
      >
        {banner.map((bannerItem) => (
          <SwiperSlide key={bannerItem.id}>
            <SlideWrapper>
              <BannerImage
                src={bannerItem.content[currentLang].imageUrl}
                alt="배너 이미지"
                onClick={() => {
                  if (!bannerItem.content[currentLang].description) {
                    handleBannerClick(bannerItem.content[currentLang].linkUrl);
                  }
                }}
              />
              {bannerItem.content[currentLang].description && (
                <TextButtonContainer>
                  <BannerTitle>
                    {bannerItem.content[currentLang].description}
                  </BannerTitle>
                  <CtaButton
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBannerClick(
                        bannerItem.content[currentLang].linkUrl
                      );
                    }}
                  >
                    {bannerItem.content[currentLang].buttonText}
                  </CtaButton>
                </TextButtonContainer>
              )}
            </SlideWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};

export default BannerSwiper;
