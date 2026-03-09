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

const reducedMotion = css`
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const MeshBackground = () => {
  return <Background />;
};

const Background = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
  background: ${({ theme }) => theme.colors.background};
  transition: background ${({ theme }) => theme.transition.slow};

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: -20%;
    will-change: transform;
    ${reducedMotion}
  }

  &::before {
    background:
      radial-gradient(circle at 20% 30%, ${({ theme }) => theme.gradient.mesh.primary}, transparent 42%),
      radial-gradient(circle at 80% 20%, ${({ theme }) => theme.gradient.mesh.secondary}, transparent 38%),
      radial-gradient(circle at 50% 80%, ${({ theme }) => theme.gradient.mesh.accent}, transparent 40%);
    animation: ${floatA} 18s ease-in-out infinite alternate;
  }

  &::after {
    background:
      radial-gradient(circle at 70% 60%, ${({ theme }) => theme.gradient.mesh.primary}, transparent 35%),
      radial-gradient(circle at 30% 70%, ${({ theme }) => theme.gradient.mesh.secondary}, transparent 32%);
    animation: ${floatB} 24s ease-in-out infinite alternate;
  }
`;
