# IT Planning Workspace

> **AI 기반 IT Planning 의사결정 지원 플랫폼 (AI-powered Decision Support Platform for IT Planning)**

IT Planning Workspace는 IT Planning 담당자가 비용 데이터를 분석하고, 운영 정책을 검색하며, AI를 활용하여 의사결정을 지원받을 수 있도록 설계한 내부 업무 지원 플랫폼입니다.

본 프로젝트는 실제 IT Planning 실무 경험(IT 비용관리, IT Governance, ITSM, 프로젝트 관리)을 기반으로 기획한 포트폴리오 프로젝트입니다.

이 프로젝트의 목적은 **AI 기술 자체를 구현하는 것이 아니라, AI를 IT Planning 업무에 어떻게 효과적으로 활용할 수 있는지를 보여주는 것**입니다.

---

# 프로젝트를 시작한 이유 (Why)

IT Planning 업무는 다양한 데이터와 문서를 기반으로 의사결정을 수행합니다.

대표적으로 다음과 같은 업무를 수행합니다.

- 월별 IT 비용 분석
- 조직별 비용 배부 검토
- IT 운영 정책 검색
- 변경 영향도 검토
- 경영진 보고자료 작성

하지만 실제 업무에서는 여러 시스템과 문서를 반복적으로 확인해야 하며, 많은 시간이 소요됩니다.

IT Planning Workspace는 이러한 반복 업무를 AI가 지원하여 **담당자가 데이터 분석과 의사결정에 더욱 집중할 수 있도록 하는 것**을 목표로 합니다.

---

# 프로젝트 목표 (Goals)

본 프로젝트는 실제 IT Planning 업무를 소프트웨어로 구현하는 것을 목표로 합니다.

주요 목표는 다음과 같습니다.

- AI를 활용한 IT Planning 업무 지원
- IT 비용 데이터 분석
- 운영 정책 검색(RAG)
- AI 기반 의사결정 지원
- 보고서 자동 생성
- 실무 중심의 포트폴리오 구축

---

# 핵심 기능 (Core Features)

## 1. Cost Analysis

CSV 형태의 비용 데이터를 업로드하여 다음 기능을 제공합니다.

- 비용 현황 분석
- 조직별 비용 비교
- 비용 추세 분석
- 이상 비용 탐지

---

## 2. AI Decision Support

분석된 데이터를 기반으로 AI가 다음 내용을 제안합니다.

- 원인 분석
- 영향도 분석
- 확인이 필요한 사항
- 개선 방향 제안

---

## 3. Policy Search (RAG)

운영 정책 문서를 등록하면 자연어로 검색할 수 있습니다.

예시

> AWS 비용 배부 기준은 무엇인가?

> 서버 증설 절차는 어떻게 되는가?

RAG(Retrieval-Augmented Generation)를 활용하여 관련 문서를 기반으로 답변합니다.

---

## 4. Report Generator

분석 결과를 기반으로 다음과 같은 문서를 생성합니다.

- 비용 분석 보고서
- 운영 보고서
- Executive Summary
- Decision Memo

---

# 시스템 아키텍처 (System Architecture)

```text
                        +----------------------+
                        |      Next.js UI      |
                        +----------+-----------+
                                   |
                               REST API
                                   |
                        +----------v-----------+
                        |       NestJS         |
                        | Business Logic Layer |
                        +----+-----------+-----+
                             |           |
               +-------------+           +--------------+
               |                                        |
    +----------v----------+                +------------v-----------+
    |    PostgreSQL       |                |       ChromaDB         |
    | Business Data       |                | Policy Vector Index    |
    +---------------------+                +------------------------+
                                   |
                          +--------v---------+
                          | Ollama (Qwen3)   |
                          | AI Analysis      |
                          +------------------+
```

---

# 기술 스택 (Technology Stack)

| 구분 | 기술 |
|------|------|
| Frontend | Next.js, TypeScript |
| Backend | NestJS |
| Database | PostgreSQL |
| AI | Ollama, Qwen3 |
| Embedding | BAAI/bge-m3 |
| Vector Database | ChromaDB |
| Container | Docker Compose |
| Version Control | Git, GitHub |

---

# 현재 구현 완료 기능 (Implemented Features)

## Cost API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /cost | 전체 비용 데이터 조회 |
| GET | /cost/count | 비용 데이터 건수 조회 |
| POST | /import/cost-ledger | CSV 업로드 및 PostgreSQL 저장 |

---

## Dashboard API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /dashboard/kpi | Dashboard KPI 조회 |
| GET | /dashboard/monthly-cost | 월별 비용 조회 |
| GET | /dashboard/service-cost | 서비스별 비용 조회 |
| GET | /dashboard/category-cost | 비용 카테고리 조회 |
| GET | /dashboard/recent-costs | 최근 비용 조회 |

---

# 프로젝트 구조 (Repository Structure)

```text
it-planning-workspace/

├── backend/
├── frontend/
├── docs/
├── docker/
├── prompts/
├── sample-data/
└── README.md
```

---

# 프로젝트 문서 (Documentation)

| 문서 | 설명 |
|------|------|
| PROJECT_CHARTER.md | 프로젝트 목적 및 범위 |
| REQUIREMENTS.md | 요구사항 정의 |
| ARCHITECTURE.md | 시스템 설계 |
| CHANGELOG.md | 변경 이력 |
| DECISION_LOG.md | 주요 의사결정 기록 |
| INTERVIEW_GUIDE.md | 면접 설명 자료 |

---

# 개발 로드맵 (Development Roadmap)

## Sprint 0

- 프로젝트 초기 환경 구성
- 프로젝트 문서 작성
- 개발 환경 구축

## Sprint 1 ✅

- PostgreSQL 구축
- CSV Import
- Cost API
- Dashboard Backend API

## Sprint 2

- Dashboard UI
- Chart 연동
- API 연결

## Sprint 3

- AI Decision Support

## Sprint 4

- Policy Search (RAG)

## Sprint 5

- Report Generator

## Release v1.0

포트폴리오 프로젝트 완성

---

# Screenshots

개발 완료 후 추가 예정

---

# Demo

개발 완료 후 추가 예정

---

# 설계 원칙 (Design Principles)

본 프로젝트는 아래 네 가지 원칙을 기반으로 개발합니다.

1. 실제 IT Planning 업무를 해결하는 기능을 구현한다.
2. AI는 실질적인 업무 가치가 있는 영역에만 적용한다.
3. 복잡한 기술보다 유지보수가 쉬운 구조를 우선한다.
4. 개발 기술보다 IT Planning 역량을 보여주는 것을 우선한다.

---

# 프로젝트 운영 원칙

- GitHub Issues 기반으로 작업을 관리합니다.
- 모든 변경 사항은 Commit History를 통해 관리합니다.
- 주요 설계 변경은 `DECISION_LOG.md`에 기록합니다.
- 프로젝트 문서는 지속적으로 최신 상태를 유지합니다.

---

# 안내 (Disclaimer)

본 프로젝트는 포트폴리오 및 학습 목적으로 제작되었습니다.

프로젝트에 포함된 비용 데이터, 운영 정책, 문서 등은 모두 가상의 데이터이거나 익명화된 예시이며, 실제 기업의 기밀 정보는 포함하지 않습니다.

---

# License

MIT License
