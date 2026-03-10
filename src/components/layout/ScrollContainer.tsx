import styled from "styled-components";

/**
 *@description: 스크롤 영역 래퍼
 *@author: gyeolhwi
 *@version: 1.0.0
 */

/**
 *@note : 헤더를 제외한 컨텐츠 전체를 감싸는 컴포넌트이며, 스크롤 이벤트를 처리하기 위해 사용
 *@note : 우선 smooth 스크롤로 적용하고 추후에 Project, Career 섹션을 제외한 곳은 풀 페이지 스크롤 효과로 적용하기 (쉽게 말하면 슬라이드쇼 느낌)
 */

/* #region: STYLE */
const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch; // iOS 스크롤 성능 최적화

  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.border} transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  // 스크롤바 트랙 (스크롤 배경)
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  // 스크롤바 썸 (막대)
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.borderLight};
  }
`;
/* #endregion: STYLE */

/* #region: COMPONENT */
export const ScrollContainer = ({ ref, children }: { ref: React.Ref<HTMLDivElement>; children: React.ReactNode }) => {
  return <Container ref={ref}>{children}</Container>;
};
/* #endregion: COMPONENT */