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

## 구현 현황

> 마지막 업데이트: 2026-03-09
>
> 각 항목의 상태: ✅ 완료 | 🔧 진행중 | ⬜ 미착수

---

### 할 일 우선순위 (순서 조정용)

아래 번호는 **의존성/권장 순서**입니다. 순서를 바꾸고 싶으면 번호를 수정해서 사용하세요.

| # | 우선순위 | 할 일 | 파일/위치 | 비고 |
|---|----------|--------|-----------|------|
| 1 | P0 | 타입 정의 | `src/types/index.ts` | Project, Career, Profile 등 — 다른 작업의 기반 |
| 2 | P0 | 폴더 구조 마무리 | `src/` | Phase 1 나머지 |
| 3 | P0 | MeshBackground | `components/common/MeshBackground.tsx` | 배경 없으면 화면 빈칸 |
| 4 | P0 | ScrollContainer | `components/layout/ScrollContainer.tsx` | 스크롤 영역 래퍼 |
| 5 | P0 | SectionTitle | `components/common/SectionTitle.tsx` | 섹션 제목 공통 |
| 6 | P0 | GlassCard | `components/common/GlassCard.tsx` | 카드 UI 재사용 |
| 7 | P0 | Header | `components/layout/Header.tsx` | 네비 + 모바일 메뉴 |
| 8 | P0 | Footer | `components/layout/Footer.tsx` | 푸터 + 소셜 링크 |
| 9 | P1 | Hero 섹션 구현 | `sections/Hero.tsx` | 현재 스텁 → 실제 UI |
| 10 | P1 | About 섹션 | `sections/About.tsx` | 2열 그리드, glass 카드 |
| 11 | P1 | Badge | `components/common/Badge.tsx` | 기술 태그 |
| 12 | P1 | LoadingScreen | `components/common/LoadingScreen.tsx` | 로딩 화면 |
| 13 | P1 | Modal | `components/common/Modal.tsx` | AnimatePresence + glass |
| 14 | P1 | useModal | `hooks/useModal.ts` | 모달 상태 훅 |
| 15 | P2 | Skills 섹션 | `sections/Skills.tsx` | 벤토 그리드 |
| 16 | P2 | 스킬 데이터 | `content/data/skills.ts` | Skills용 |
| 17 | P2 | 프로필 데이터 | `content/data/profile.ts` | Hero/About용 |
| 18 | P2 | ProjectCard, ProjectModal, ProjectGallery | `components/project/*` | Projects 섹션용 |
| 19 | P2 | Projects 섹션 | `sections/Projects.tsx` | 그리드 + 모달 연동 |
| 20 | P2 | 프로젝트 데이터 + 마크다운 | `content/data/projects.ts`, `content/projects/*.md` | |
| 21 | P2 | Career 섹션 | `sections/Career.tsx` | 타임라인 |
| 22 | P2 | 경력 데이터 | `content/data/careers.ts` | |
| 23 | P3 | FormInput, ContactForm, SocialLinks | `components/contact/*` | Contact용 |
| 24 | P3 | Contact 섹션 | `sections/Contact.tsx` | 폼 + 소셜 |
| 25 | P3 | useContactForm | `hooks/useContactForm.ts` | |
| 26 | P3 | useAppReady, useScrollSpy, useScrollDirection | `hooks/*` | 앱/헤더 연동 |
| 27 | P3 | App.tsx 완성 | `App.tsx` | MeshBackground, AnimatePresence, 로딩 연동 |
| 28 | P3 | HomePage 완성 | `pages/HomePage.tsx` | 전체 섹션 조립 |
| 29 | P4 | env 래퍼, EmailJS | `config/env.ts`, `lib/emailjs.ts` | Contact 제출용 |
| 30 | P4 | .env, 404 우회, gh-pages 배포 | `.env`, `package.json` | Phase 7 |

- **P0**: 기반(타입, 레이아웃, 공통 컴포넌트) — 먼저 하면 이후 작업이 수월함  
- **P1**: 첫 화면(Hero, About) + 로딩/모달  
- **P2**: 나머지 섹션(Skills, Projects, Career) + 해당 데이터  
- **P3**: Contact, 훅 연동, 앱/페이지 조립  
- **P4**: 배포·환경 설정  

---

### Phase별 상세 현황

#### Phase 1: 프로젝트 초기화

| 항목 | 상태 | 파일 | 비고 |
|------|------|------|------|
| Vite 프로젝트 생성 | ✅ | - | react-swc-ts 템플릿 |
| 의존성 설치 | ✅ | `package.json` | 핵심 패키지 설치 완료 |
| 경로 별칭 (`@/`) | ✅ | `vite.config.ts`, `tsconfig.app.json` | |
| 폴더 구조 생성 | ✅ | `src/` | README 구조 기준 완료 |

#### Phase 2: 기반 시스템

| 항목 | 상태 | 파일 | 비고 |
|------|------|------|------|
| 타입 정의 | ✅ | `src/types/index.ts` | Profile, Career, Skills, Project, Image |
| 테마 (dark/light) | ✅ | `src/styles/theme.ts` | Theme 인터페이스 + 두 테마 객체 |
| styled.d.ts 타입 확장 | ✅ | `src/styles/styled.d.ts` | |
| 글로벌 스타일 | ✅ | `src/styles/GlobalStyle.ts` | |
| 테마 스토어 (Zustand) | ✅ | `src/store/useThemeStore.ts` | localStorage + 시스템 감지 |

#### Phase 3: 공통 컴포넌트

| 항목 | 상태 | 파일 | 비고 |
|------|------|------|------|
| MeshBackground | ⬜ | `src/components/common/MeshBackground.tsx` | 애니메이티드 그라데이션 배경 |
| ScrollContainer | ⬜ | `src/components/layout/ScrollContainer.tsx` | 유일한 스크롤 주체, forwardRef |
| SectionTitle | ⬜ | `src/components/common/SectionTitle.tsx` | 그라데이션 텍스트 + whileInView |
| Badge | ⬜ | `src/components/common/Badge.tsx` | 기술 태그 |
| Modal | ⬜ | `src/components/common/Modal.tsx` | AnimatePresence + glass |
| LoadingScreen | ⬜ | `src/components/common/LoadingScreen.tsx` | 철학 텍스트 + 프로그레스 바 |
| GlassCard | ⬜ | `src/components/common/GlassCard.tsx` | 재사용 글래스 카드 (유틸리티) |

#### Phase 4: 레이아웃

| 항목 | 상태 | 파일 | 비고 |
|------|------|------|------|
| Header | ⬜ | `src/components/layout/Header.tsx` | glass 헤더 + 네비 + 모바일 햄버거 |
| Footer | ⬜ | `src/components/layout/Footer.tsx` | glass 푸터 + 소셜 링크 |
| HomePage 조립 | 🔧 | `src/pages/HomePage.tsx` | 현재 Hero만 렌더링 중 |

#### Phase 5: 섹션 구현

| 항목 | 상태 | 파일 | 비고 |
|------|------|------|------|
| Hero | 🔧 | `src/sections/Hero.tsx` | 스텁만 존재 (구현 필요) |
| About | ⬜ | `src/sections/About.tsx` | 2열 그리드, glass 카드 |
| Skills | ⬜ | `src/sections/Skills.tsx` | 벤토 그리드 4열→2열→1열 |
| Projects | ⬜ | `src/sections/Projects.tsx` | 프로젝트 그리드 + 모달 연동 |
| Career | ⬜ | `src/sections/Career.tsx` | 타임라인 + glass 카드 |
| Contact | ⬜ | `src/sections/Contact.tsx` | 폼 + 소셜 링크 |

#### Phase 5-sub: 세부 컴포넌트

| 항목 | 상태 | 파일 | 비고 |
|------|------|------|------|
| ProjectCard | ⬜ | `src/components/project/ProjectCard.tsx` | whileInView + whileHover |
| ProjectModal | ⬜ | `src/components/project/ProjectModal.tsx` | Gallery + Markdown |
| ProjectGallery | ⬜ | `src/components/project/ProjectGallery.tsx` | 이미지 그리드 |
| FormInput | ⬜ | `src/components/contact/FormInput.tsx` | Input + TextArea (forwardRef) |
| ContactForm | ⬜ | `src/components/contact/ContactForm.tsx` | react-hook-form + EmailJS |
| SocialLinks | ⬜ | `src/components/contact/SocialLinks.tsx` | tagBg + hover 인터랙션 |

#### Hooks

| 항목 | 상태 | 파일 | 비고 |
|------|------|------|------|
| useAppReady | ⬜ | `src/hooks/useAppReady.ts` | 이미지 프리로딩 + 최소 로딩 시간 |
| useScrollSpy | ⬜ | `src/hooks/useScrollSpy.ts` | IntersectionObserver 활성 섹션 |
| useScrollDirection | ⬜ | `src/hooks/useScrollDirection.ts` | 헤더 show/hide |
| useContactForm | ⬜ | `src/hooks/useContactForm.ts` | 폼 제출 래퍼 |
| useModal | ⬜ | `src/hooks/useModal.ts` | 모달 open/close |

#### 콘텐츠 데이터

| 항목 | 상태 | 파일 | 비고 |
|------|------|------|------|
| 프로필 데이터 | ⬜ | `src/content/data/profile.ts` | 프로필 정보 + 분기별 Hero 이미지 |
| 스킬 데이터 | ⬜ | `src/content/data/skills.ts` | 카테고리별 스킬 배열 |
| 경력 데이터 | ⬜ | `src/content/data/careers.ts` | 경력 타임라인 |
| 프로젝트 데이터 | ⬜ | `src/content/data/projects.ts` | 프로젝트 목록 + md import |
| 프로젝트 마크다운 | ⬜ | `src/content/projects/*.md` | 프로젝트별 상세 설명 |

#### 유틸 & 설정

| 항목 | 상태 | 파일 | 비고 |
|------|------|------|------|
| 환경 변수 래퍼 | ⬜ | `src/config/env.ts` | VITE_ 환경 변수 |
| EmailJS 로직 | ⬜ | `src/lib/emailjs.ts` | 전송 + 폴백 |

#### Phase 6: 앱 조립

| 항목 | 상태 | 파일 | 비고 |
|------|------|------|------|
| App.tsx 완성 | 🔧 | `src/App.tsx` | MeshBackground, AnimatePresence 미적용 |
| 로딩 시스템 연동 | ⬜ | `src/App.tsx` | HomeRoute + useAppReady |
| HomePage 완성 | ⬜ | `src/pages/HomePage.tsx` | Header + ScrollContainer + 전체 섹션 + Footer |

#### Phase 7: 배포

| 항목 | 상태 | 파일 | 비고 |
|------|------|------|------|
| EmailJS .env 설정 | ⬜ | `.env` | Service/Template/Public Key |
| 404.html SPA 우회 | ⬜ | `package.json` | postbuild 스크립트 |
| GitHub Pages 배포 | ⬜ | - | gh-pages -d dist |

#### 진행 요약

```
Phase 1  ████████████  초기화          (완료)
Phase 2  ████████████  기반 시스템      (완료)
Phase 3  ░░░░░░░░░░░░  공통 컴포넌트    (미착수)
Phase 4  ░░░░░░░░░░░░  레이아웃        (미착수)
Phase 5  ░░░░░░░░░░░░  섹션 구현       (Hero 스텁만)
Phase 6  ██░░░░░░░░░░  앱 조립         (기본 구조만)
Phase 7  ░░░░░░░░░░░░  배포           (미착수)
```

---

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

### 우선순위 선정

> **문제**: (어떤 문제가 발생했는지)
>
> **원인**: (왜 발생했는지)
>
> **해결**: (어떻게 해결했는지)
>
> **배운 점**: (이 과정에서 무엇을 배웠는지)


## 회고

<!-- 프로젝트를 마치고 느낀 점, 개선하고 싶은 부분 -->
