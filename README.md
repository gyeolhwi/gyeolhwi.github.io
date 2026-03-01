# About Me - 포트폴리오

> AI로 기획·설계하고, 구조를 이해할 수 있도록 직접 코딩하였으며, 템플릿화할 수 있도록 구성하였다.

## 기획 의도

- GitHub 기반으로 코드 공유, 개발 과정(커밋 내역), Vercel 배포를 한 흐름으로 둔다
- 단순히 결과물만 보여주는 것이 아니라, 기획부터 설계, 구현까지의 **과정 자체**를 기록하고 공유하는 것이 목표
- AI 도구들을 활용해 기획과 설계의 효율을 높이되, 코드는 직접 작성하며 기술을 체득하는 방식으로 진행
- 나의 기술 스택, 프로젝트 경험, 문제 해결 과정을 한 곳에서 보여줄 수 있는 반응형 포트폴리오 웹 사이트

## 기술 스택

| 영역 | 기술 | 버전 | 용도 |
|------|------|------|------|
| Core | React | 19 | UI 렌더링 |
| Language | TypeScript | 5.9 | 정적 타입 |
| Build | Vite + SWC | 7 | 번들링, HMR |
| Styling | styled-components | 6 | CSS-in-JS, ThemeProvider 기반 테마 관리 |
| Animation | Framer Motion | 12 | 트랜지션, 스크롤 진입, 호버 인터랙션 |
| State | Zustand | 5 | 테마 모드 상태 (localStorage 연동) |
| Routing | React Router | 7 | SPA 라우팅 |
| Form | React Hook Form | 7 | 폼 유효성 검사 |
| Email | EmailJS | 4 | 서버리스 이메일 전송 |
| Markdown | react-markdown + remark-gfm | - | 프로젝트 상세 마크다운 렌더링 |
| Deploy | gh-pages | - | GitHub Pages 배포 |

## 프로젝트 구조

```
src/
├── App.tsx                     # 루트: ThemeProvider + MeshBackground + Router
├── main.tsx                    # 엔트리: BrowserRouter 래핑
├── index.css                   # 최소한의 기본 CSS (Pretendard 폰트 로드 등)
│
├── styles/
│   ├── theme.ts                # Theme 인터페이스 + darkTheme/lightTheme 객체
│   ├── styled.d.ts             # styled-components DefaultTheme 타입 확장
│   └── GlobalStyle.ts          # createGlobalStyle (리셋, 스크롤바, 폰트)
│
├── store/
│   └── useThemeStore.ts        # Zustand: 테마 모드 + localStorage + 시스템 감지
│
├── types/
│   └── index.ts                # 공유 타입 (Project, Career, Profile 등)
│
├── config/
│   └── env.ts                  # 환경 변수 래퍼
│
├── lib/
│   └── emailjs.ts              # EmailJS 전송 로직
│
├── hooks/
│   ├── useAppReady.ts          # 이미지 프리로딩 + 최소 로딩 시간 관리
│   ├── useScrollSpy.ts         # IntersectionObserver 기반 활성 섹션 감지
│   ├── useScrollDirection.ts   # 스크롤 방향 감지 (헤더 show/hide)
│   ├── useContactForm.ts       # 폼 제출 로직 래퍼
│   └── useModal.ts             # 제네릭 모달 open/close 상태
│
├── content/
│   ├── data/
│   │   ├── profile.ts          # 프로필 정보 + 분기별 Hero 이미지
│   │   ├── skills.ts           # 기술 카테고리별 스킬 배열
│   │   ├── careers.ts          # 경력 타임라인 데이터
│   │   └── projects.ts         # 프로젝트 목록 + 마크다운 import
│   └── projects/
│       └── *.md                # 프로젝트별 상세 마크다운
│
├── pages/
│   └── HomePage.tsx            # 메인: Header + ScrollContainer + 섹션들 + Footer
│
├── sections/                   # 페이지 단위 섹션 컴포넌트
│   ├── Hero.tsx                # 풀스크린 프로필 + 글래스 오버레이
│   ├── About.tsx               # 프로필 사진 + 자기소개
│   ├── Skills.tsx              # 벤토 그리드 스킬 카드
│   ├── Projects.tsx            # 프로젝트 그리드 + 모달
│   ├── Career.tsx              # 타임라인 경력 카드
│   └── Contact.tsx             # 폼 + 소셜 링크
│
└── components/
    ├── layout/
    │   ├── Header.tsx          # 글래스 헤더 + 네비게이션 + 모바일 햄버거
    │   ├── ScrollContainer.tsx # 유일한 스크롤 영역 래퍼
    │   └── Footer.tsx          # 글래스 푸터
    ├── common/
    │   ├── MeshBackground.tsx  # 애니메이티드 그라데이션 배경
    │   ├── SectionTitle.tsx    # 그라데이션 텍스트 섹션 제목
    │   ├── Badge.tsx           # 기술 태그 뱃지
    │   ├── Modal.tsx           # 범용 모달
    │   └── LoadingScreen.tsx   # 초기 로딩 화면
    ├── project/
    │   ├── ProjectCard.tsx     # 프로젝트 썸네일 카드
    │   ├── ProjectModal.tsx    # 프로젝트 상세 모달
    │   └── ProjectGallery.tsx  # 이미지 그리드
    └── contact/
        ├── FormInput.tsx       # Input/TextArea 필드
        ├── ContactForm.tsx     # 폼 로직 + 제출 + 상태 메시지
        └── SocialLinks.tsx     # 소셜 링크 목록
```

## 기획 과정

### 1단계: 초기 기획 — AI 브레인스토밍

- **Claude**와 **Gemini**를 활용하여 포트폴리오의 방향성과 초기 아이디어를 구체화
- 두 AI의 응답을 비교하며 각각의 강점을 취합

### 2단계: 초안 생성 — AI 협업 드래프팅

- **Cursor**와 **AI Studio**를 통해 초안을 생성
- 양쪽 결과물에서 괜찮은 부분을 선별하여 병합

### 3단계: 프로젝트 구조 설계

- **Claude Opus**를 참조하여 프로젝트 아키텍처 및 디렉토리 구조 결정

### 4단계: 2차 기획 & 피드백

- **Google NotebookLM**을 활용하여 관련 자료 수집 및 정리
- 수집한 자료를 바탕으로 기획 보완 및 피드백 반영

### 5단계: 최종 첨삭 & 구현 시작

- 전체 기획을 첨삭하여 최종 아키텍처 확정
- 확정된 구조를 기반으로 직접 코딩 시작 ← **현재 단계**

### 왜 직접 코딩하는가

AI를 활용하면 결과물 자체는 금방 나오는 시대다. 하지만 이 프로젝트에서 코딩을 직접 하는 이유는 명확하다.

- **AI가 추천하는 구조와 패턴을 직접 구현하면서 뜯어보고 공부하기 위해.** 왜 이런 설계를 제안했는지, 어떤 방식이 효율적인지를 코드를 치면서 체득하는 것이 목적이다.
- **내 포트폴리오는 내가 직접 만들어야 한다.** 기획과 설계에 AI의 도움을 받되, 코드를 작성하는 과정만큼은 온전히 나의 것이어야 한다고 판단했다.

### 6단계: 배포

<!-- GitHub Pages 배포 과정 -->

## 개발 도구 활용

### Claude Commands

개발 품질과 일관성을 위해 `.claude/commands/`에 커스텀 명령어를 구성하여 사용한다.

| 명령어 | 용도 |
|--------|------|
| `/commit-auto` | 변경사항을 기능별로 그룹화하여 커밋 컨벤션에 맞게 자동 커밋 |
| `/review-architecture` | `docs/` 아키텍처 문서를 기준으로 현재 코드가 설계를 준수하는지 7개 항목 검토 |

- **commit-auto**: 커밋 메시지의 일관성을 유지하기 위해 사용. `<type>(<scope>): <subject>` 형식으로 기능별 그룹 커밋을 자동 생성한다.
- **review-architecture**: 코딩 중간중간 실행하여 `docs/`에 정의된 폴더 구조, 절대 규칙 5가지, 컴포넌트 계층, 테마 시스템, 애니메이션 전략 등을 검증한다.

## 페이지 구성

| 섹션 | 설명 |
|------|------|
| Hero | 풀스크린 프로필 이미지 + 글래스 오버레이 + 스크롤 인디케이터 |
| About | 프로필 사진 + 자기소개 + 인포 리스트 (2열 그리드) |
| Skills | 벤토 그리드 레이아웃 스킬 카드 (4열 → 2열 → 1열 반응형) |
| Projects | 프로젝트 그리드 + 클릭 시 상세 모달 (갤러리 + 마크다운) |
| Career | 타임라인 경력 카드 |
| Contact | 폼 (react-hook-form) + 소셜 링크 |

## 어려웠던 점 & 해결 과정

<!-- 개발하면서 겪은 문제와 어떻게 해결했는지 기록 -->

### 예시 형식

> **문제**: (어떤 문제가 발생했는지)
>
> **원인**: (왜 발생했는지)
>
> **해결**: (어떻게 해결했는지)
>
> **배운 점**: (이 과정에서 무엇을 배웠는지)

## 회고

<!-- 프로젝트를 마치고 느낀 점, 개선하고 싶은 부분 -->
