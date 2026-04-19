import { motion } from "framer-motion";
import styled from "styled-components";

/**
 *@description: 섹션 제목 컴포넌트
 *@author: gyeolhwi
 *@version: 1.0.0
 *
 * 각 섹션별 제목
 */

// #region: STYLE

const Title = styled(motion.h2)`
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  /* 배경색상 기울기 135deg로 그라데이션 적용 */
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.text} 0%,
    ${({ theme }) => theme.colors.secondary} 100%
  );
  /* 글자영역에만 배경색상 적용 */
  background-clip: text;
  -webkit-background-clip: text;
  /* 글자색상을 투명하게 처리하고 배경색상이 글자 색상으로 비침 */
  -webkit-text-fill-color: transparent;
`;
// #endregion: STYLE
interface SectionTitleProps {
  children: React.ReactNode;
}

// WIP : 최상단 적용점 체크
// #region: COMPONENT
export const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <Title
      initial={{ opacity: 0, y: -30 }} // 시작: 투명 + 30px 위
      whileInView={{ opacity: 1, y: 0 }} // 화면 진입 시: 불투명 + 제자리
      viewport={{ once: true }} // 한 번만 발동 (재진입 X)
      transition={{ duration: 0.6 }} // 0.6초 동안 부드럽게 전환
    >
      {children}
    </Title>
  );
};
// #endregion: COMPONENT
