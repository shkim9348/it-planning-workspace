export default function Home() {
  return (
    <main
      style={{
        maxWidth: "960px",
        margin: "60px auto",
        fontFamily: "sans-serif",
        lineHeight: 1.8,
      }}
    >
      <h1>IT Planning Workspace</h1>

      <p>
        AI 기반 IT Planning 의사결정 지원 플랫폼
      </p>

      <hr />

      <h2>Project Vision</h2>

      <p>
        IT Planning 업무에서 발생하는 비용 분석,
        운영 정책 검색,
        AI 기반 의사결정을 하나의 플랫폼에서 지원합니다.
      </p>

      <h2>Development Status</h2>

      <ul>
        <li>✅ Frontend Initialized</li>
        <li>⬜ Backend</li>
        <li>⬜ Cost Analysis</li>
        <li>⬜ AI Decision Support</li>
        <li>⬜ Policy Search (RAG)</li>
        <li>⬜ Report Generator</li>
      </ul>
    </main>
  );
}
