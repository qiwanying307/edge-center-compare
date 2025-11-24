// app/page.tsx
export default function HomePage() {
  return (
    <main style={{ padding: 40, textAlign: 'center' }}>
      <h1>欢迎来到 Vercel Edge SSR 演示</h1>
      <p>
        <a href="/region" style={{ color: 'blue', textDecoration: 'underline' }}>
          进入边缘 SSR 动态页面 →
        </a>
      </p>
    </main>
  )
}