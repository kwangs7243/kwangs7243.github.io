# 이주광 포트폴리오 사이트

백엔드 개발자 이주광의 소개와 프로젝트 경험을 정적 페이지로 제공하는 취업 포트폴리오 사이트입니다.

메인 페이지는 개발자 소개와 문제 해결 경험을 빠르게 보여주고, PILOS Sentiment Index의 기술적 근거는 별도 프로젝트 Case Study 페이지에서 제공합니다.

## 구현 기술

- 시맨틱 HTML
- 반응형 CSS
- 외부 라이브러리 및 빌드 단계 없음

정적 배포가 쉽고, 콘텐츠 교체가 단순하며, 현재 사이트에 별도 상태 관리나 서버 기능이 필요하지 않아 의존성 없는 구조를 선택했습니다.

## 로컬 실행

`portfolio-site` 디렉터리에서 다음 명령을 실행합니다.

```powershell
python -m http.server 4173
```

브라우저에서 `http://localhost:4173`을 엽니다.

## 파일 구조

```text
portfolio-site/
├── docs/                         # 포트폴리오 기준 문서
├── projects/
│   └── pilos/
│       └── index.html            # PILOS 상세 Case Study
├── index.html                    # 사람 중심의 메인 포트폴리오
├── styles.css                    # 메인·상세 공유 스타일과 반응형 규칙
├── 증명사진_모바일신분증용.jpg   # Hero 프로필 사진
└── README.md                     # 기술 선택과 실행 방법
```
