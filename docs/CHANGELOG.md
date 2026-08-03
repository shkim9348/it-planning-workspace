# Changelog

프로젝트의 주요 변경 사항을 기록합니다.

본 문서는 **Keep a Changelog** 형식을 참고하여 작성하며, 주요 기능 추가 및 아키텍처 변경 사항을 중심으로 관리합니다.

---

## [Unreleased]

### Planned

- Dashboard UI (Next.js)
- Dashboard Chart 연동
- AI 비용 분석
- AI 보고서 생성
- RAG 기반 정책 검색
- 보고서 자동 생성

---

## [v0.4.0] - Dashboard Backend

### Added

#### Dashboard API

- KPI API (`GET /dashboard/kpi`)
- 월별 비용 조회 API (`GET /dashboard/monthly-cost`)
- 서비스별 비용 조회 API (`GET /dashboard/service-cost`)
- 비용 카테고리 조회 API (`GET /dashboard/category-cost`)
- 최근 비용 조회 API (`GET /dashboard/recent-costs`)

#### Dashboard Service

- KPI 집계 로직 구현
- 월별 비용 집계
- 서비스별 비용 집계
- 카테고리별 비용 집계
- 최근 비용 조회 로직 구현

#### Verification

- Dashboard API 전체 Postman 테스트 완료
- Backend Dashboard 기능 검증 완료

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

- `GET /cost`
- `GET /cost/count`

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

- `POST /import/cost-ledger`
- Multipart File Upload 지원
- CSV Parsing
- Validation
- PostgreSQL 저장 기능

---

## [v0.1.0] - Project Initialization

### Added

#### Project Setup

- GitHub Repository 생성
- 프로젝트 기본 디렉터리 구성
- README 작성
- LICENSE 추가
- .gitignore 작성
- docs 구조 생성
- Project Charter 작성

#### Git Workflow

- Git Flow 적용
- GitHub Issues 기반 작업 관리
- Conventional Commit 적용

#### Frontend

- Next.js 초기화
- TypeScript
- ESLint
- App Router
- Landing Page 구성

---

## Release Plan

| Version | Description | Status |
|----------|-------------|--------|
| v0.1.0 | Project Initialization | ✅ Completed |
| v0.2.0 | CSV Import Foundation | ✅ Completed |
| v0.3.0 | Database Integration | ✅ Completed |
| v0.4.0 | Dashboard Backend | ✅ Completed |
| v0.5.0 | Dashboard UI | ⏳ Planned |
| v0.6.0 | AI Cost Analysis | ⏳ Planned |
| v0.7.0 | RAG Policy Search | ⏳ Planned |
| v0.8.0 | AI Report Generator | ⏳ Planned |
| v1.0.0 | Portfolio Release | ⏳ Planned |
