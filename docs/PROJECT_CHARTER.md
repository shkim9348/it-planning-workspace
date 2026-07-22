# Project Charter

## 1. Project Overview

**IT Planning Workspace**는 IT 기획 담당자가 반복적으로 수행하는 비용 분석, 정책 검색, 보고서 작성 등의 업무를 AI 기반으로 지원하는 **의사결정 지원 플랫폼**입니다.

본 프로젝트는 실제 IT Planning 업무를 기반으로 기획되었으며, AI를 활용하여 업무 효율성과 의사결정 품질을 향상시키는 것을 목표로 합니다.

또한 국내 IT 기업의 **IT Planning / IT Strategy / PM 직무 포트폴리오**를 목적으로 개발되며, 개발 기술 자체보다 **IT 기획 역량과 문제 해결 능력**을 보여주는 데 중점을 둡니다.

---

# 2. Project Goal

본 프로젝트는 다음 역량을 보여주는 것을 목표로 합니다.

- IT Planning 업무 이해
- 데이터 기반 의사결정
- IT 인프라 비용 관리
- 서비스 기획 및 설계
- AI 활용 능력
- GitHub 기반 프로젝트 관리
- 실무 수준의 문서화

---

# 3. Project Scope

## In Scope

- 비용 데이터 업로드
- 비용 데이터 저장(PostgreSQL)
- Dashboard
- AI 기반 비용 분석
- 정책 문서 검색(RAG)
- 보고서 초안 생성

## Out of Scope

- 사용자 인증 및 권한 관리
- 운영 환경 구축
- 대규모 트래픽 대응
- 실시간 협업 기능
- CI/CD 구축

---

# 4. Target User

- IT Planning 담당자
- IT 운영 담당자
- IT 관리자

---

# 5. Core Features

## 1. Cost Data Management

- CSV 업로드
- PostgreSQL 저장
- 비용 데이터 관리

---

## 2. Cost Analysis Dashboard

비용 데이터를 기반으로

- 월별 비용 추이
- 서비스별 비용
- 비용 분포
- 이상 비용 탐지

를 제공합니다.

---

## 3. AI Decision Support

비용 데이터를 기반으로

- 비용 증가 원인 분석
- 개선 방향 제안
- 비용 최적화 인사이트

를 제공합니다.

---

## 4. Policy Search (RAG)

사내 정책 문서를 검색하고

관련 내용을 AI가 요약하여 제공합니다.

---

## 5. Report Generator

비용 분석 결과를 기반으로

보고서 초안을 자동 생성합니다.

---

# 6. Technology Stack

## Frontend

- Next.js
- TypeScript

## Backend

- NestJS
- TypeORM

## Database

- PostgreSQL

## Version Control

- Git
- GitHub
- GitHub Issues

---

# 7. Development Principles

본 프로젝트는 다음 원칙을 유지합니다.

- 기능보다 문제 해결을 우선한다.
- IT 기획 관점의 의사결정을 중심으로 설계한다.
- 실무 수준의 구조를 유지한다.
- 과도한 기술 사용을 지양한다.
- GitHub Issues 기반으로 프로젝트를 관리한다.

---

# 8. Success Criteria

- 모든 핵심 기능 구현
- GitHub 기반 프로젝트 관리
- 실무 수준의 문서화
- IT Planning 포트폴리오로 활용 가능한 수준 달성
