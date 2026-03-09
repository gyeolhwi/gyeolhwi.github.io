/**
 * @description: 공유 타입 정의
 * @author: gyeolhwi
 * @version: 1.0.0
 */

/**
 * @note 왜 index.ts 파일로 분리하지않고 우선 진행하는가?
 * 타입이 적을 것이기 때문에 분리하지않고 우선 진행
 */

// 내 정보
export interface Profile {
  name: string;
  birthDate: number; // YYYYMMDD
  email: string;
  phone?: string;
  role: string; // 현재 직무
  tagline: string; // 한 줄 소개
  description: string; // 자기소개
  location: string; // 현재 거주지
  education: string; // 최종학력
  images: Image[];
  socialLinks: { platform: string; url: string }[];
}

// 경력
export interface Career {
  // 재직기간
  period: {
    start: string;
    end?: string; // 현재 재직중인 경우 비워둠
  };
  company: string;
  position: string; // 직급
  description: string; // 한 일 요약
  techStack: string[]; // 사용 기술
}

// 기술스택
export interface Skills {
  language: string[]; // TypeScript, JavaScript, Python, Java, PHP
  frontend: string[]; // React, Next.js, Tailwind CSS, Styled-Components / Zustand, React-Query, React-Hook-Form
  backend: string[]; // Spring(Boot), SupaBase, MySQL, Firebase
  devops: string[]; // Docker, Git, CI/CD, AWS S3 / CloudFront, Vercel
  ai: string[]; // Claude, Gemini, Cursor, Google NotebookLM
}

// 프로젝트
export interface Project {
  id: number;
  title: string;
  slug: string; // 프로젝트 고유 식별자 (markdown 파일 이름)
  description: string;
  tags: string[];
  images: Image[];
}

// 이미지
export interface Image {
  src: string;
  alt: string;
}