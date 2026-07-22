# Changelog

프로젝트의 주요 변경 사항을 기록합니다.

본 문서는 **Keep a Changelog** 형식을 참고하여 작성하며, 주요 기능 추가 및 아키텍처 변경 사항을 중심으로 관리합니다.

---

## [Unreleased]

### Planned

- Dashboard API 개발
- Dashboard UI 개발
- AI 비용 분석 기능
- AI 보고서 생성 기능

---

## [v0.3.0] - Database Integration

### Added

#### Database

- PostgreSQL 데이터베이스 구축
- `planflow` 데이터베이스 생성
- TypeORM 연동
- CostLedger Entity 생성
- `cost_ledger` 테이블 생성

#### Data Import

- CSV 데이터를 PostgreSQL에 저장하는 기능 구현
- CSV → Entity 변환 로직 구현
- CostService를 통한 Repository 저장 구조 적용

#### Cost API

- `GET /cost` API 구현
- `GET /cost/count` API 구현

#### Verification

- PostgreSQL 저장 검증 완료 (1,200건)
- Cost 조회 API 검증 완료
- Cost Count API 검증 완료

---

## [v0.2.0] - CSV Import Foundation

### Added

#### Backend

- NestJS 프로젝트 초기화
- Import Module 생성
- Import Controller / Service 구성

#### CSV Import

- `POST /import/cost-ledger` API 구현
- Multipart File Upload 지원
- CSV Parsing 기능 구현
- Preview(JSON) 반환 기능 추가

#### Validation

- 파일 존재 여부 검증
- CSV 확장자 검증
- 빈 파일 검증
- 필수 Header 검증

---

## [v0.1.0] - Project Initialization

### Added

#### Project Setup

- GitHub Repository 생성
- 프로젝트 기본 디렉터리 구성
- README 작성
- LICENSE 추가
- .gitignore 작성
- 프로젝트 문서 구조 생성 (`docs/`)
- Project Charter 작성

#### Git Workflow

- Git 브랜치 전략 수립 (`master`, `develop`, `feature/*`)
- GitHub Issues 기반 작업 관리
- Conventional Commits 적용

#### Frontend

- Next.js 프로젝트 초기화
- TypeScript 적용
- ESLint 적용
- App Router 적용
- 프로젝트 Landing Page 구성
- Frontend 개발 환경 실행 확인

---

## Release Plan

| Version | Description | Status |
|----------|-------------|--------|
| v0.1.0 | Project Initialization | ✅ Completed |
| v0.2.0 | CSV Import Foundation | ✅ Completed |
| v0.3.0 | Database Integration | ✅ Completed |
| v0.4.0 | Cost Dashboard | ⏳ Planned |
| v0.5.0 | AI Cost Analysis | ⏳ Planned |
| v0.6.0 | AI Report Generation | ⏳ Planned |
| v1.0.0 | Portfolio Release | ⏳ Planned |
