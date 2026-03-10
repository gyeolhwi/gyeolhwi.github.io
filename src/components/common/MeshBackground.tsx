import styled, { keyframes, css } from "styled-components";
/**
 *@description: 스택 radial-gradient 메시 배경
 *@author: gyeolhwi
 *@version: 2.0.0
 *
 * 구조: fixed 배경 + ::before(3개 radial-gradient) + ::after(2개 radial-gradient)
 * 각 pseudo-element가 독립 keyframes로 서로 다른 속도/궤적으로 이동하여
 * 겹침 영역에서 유기적 mesh 느낌을 생성한다.
 *
 * blur 미사용 — radial-gradient의 transparent 페이드로 소프트 엣지 처리.
 * will-change: transform은 움직이는 pseudo-element에만 제한 적용.
 */

/* #region: STYLE */
const floatA = keyframes`
  0%, 100% { transform: translate(0%, 0%) rotate(0deg); }
  25%      { transform: translate(5%, -8%) rotate(1deg); }
  50%      { transform: translate(-3%, 6%) rotate(-1deg); }
  75%      { transform: translate(8%, 3%) rotate(0.5deg); }
`;

const floatB = keyframes`
  0%, 100% { transform: translate(0%, 0%) rotate(0deg); }
  25%      { transform: translate(-8%, 5%) rotate(-1deg); }
  50%      { transform: translate(6%, -3%) rotate(1deg); }
  75%      { transform: translate(-5%, -8%) rotate(-0.5deg); }
`;

// 사용자가 애니메이션 감소 설정을 했을 때 애니메이션 비활성화
const reducedMotion = css`
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Background = styled.div`
  position: fixed; // 배경 고정
  inset: 0; // 전체 영역 차지
  z-index: -1; // 우선순위 낮춤 (간섭 방지)
  pointer-events: none; // 클릭 무시 (컨텐츠 클릭 방지)
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
  transition: background ${({ theme }) => theme.transition.slow};

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: -20%;
    will-change: transform; // 애니메이션 성능 최적화
    ${reducedMotion}
  }

  &::before {
    background:
      radial-gradient(circle at 20% 30%, ${({ theme }) => theme.gradient.mesh.primary}, transparent 42%),
      radial-gradient(circle at 80% 20%, ${({ theme }) => theme.gradient.mesh.secondary}, transparent 38%),
      radial-gradient(circle at 50% 80%, ${({ theme }) => theme.gradient.mesh.accent}, transparent 40%);
    animation: ${floatA} 18s ease-in-out infinite alternate; // 18초 동안 진행되는 애니메이션 (그걸 infinite로 무한 반복) alternate는 앞뒤로 왔다갔다 하는 효과
  }

  &::after {
    background:
      radial-gradient(circle at 70% 60%, ${({ theme }) => theme.gradient.mesh.primary}, transparent 35%),
      radial-gradient(circle at 30% 70%, ${({ theme }) => theme.gradient.mesh.secondary}, transparent 32%);
    animation: ${floatB} 24s ease-in-out infinite alternate;
  }
`;
/* #endregion: STYLE */

/* #region: COMPONENT */
export const MeshBackground = () => {
  return <Background />;
};
/* #endregion: COMPONENT */