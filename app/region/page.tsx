// app/region/page.tsx

// 声明运行在 Edge Runtime
export const runtime = 'edge'

// 模拟获取用户地区（实际可用 IP、请求头、Geo API）
function getMockRegion(): 'CN' | 'US' {
  const regions = ['CN', 'US']
  const random = Math.random()
  return random > 0.5 ? 'CN' : 'US'
}

// 模拟 A/B 测试分组
function getABGroup(): 'A' | 'B' {
  const groups = ['A', 'B']
  const random = Math.random()
  return random > 0.5 ? 'A' : 'B'
}

// 获取用户信息（模拟异步）
async function getUserInfo() {
  const region = getMockRegion()
  const abGroup = getABGroup()
  return { region, abGroup }
}

export default async function RegionPage() {
  const { region, abGroup } = await getUserInfo()

  // 地区映射
  const regionNames: Record<string, string> = {
    CN: '中国',
    US: '美国',
  }

  const displayName = regionNames[region] || region
  const abTexts = {
    A: { text: 'A版（蓝色主题）', style: 'color: blue; font-weight: bold;' },
    B: { text: 'B版（绿色主题）', style: 'color: green; font-weight: bold;' },
  }
  const ab = abTexts[abGroup]

  return (
    <main style={{
      padding: 40,
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
      textAlign: 'center',
    }}>
      <h1>🚀 Vercel Edge SSR（动态地区 + A/B）</h1>

      <p><strong>🌍 您的地区：</strong>{displayName}</p>
      <p><strong>🧪 您的 A/B 分组：</strong>{ab.text}</p>

      <div style={{
        marginTop: 30,
        padding: 20,
        border: '2px dashed #ccc',
        borderRadius: 10,
        backgroundColor: '#ffffff',
      }}>
        <p style={{ margin: 0, ...{ style: ab.style as any } }}>
          {ab.text} 的专属内容已为您呈现！
        </p>
        <p style={{ fontSize: '14px', marginTop: 10, color: '#666' }}>
          ✅ 运行在边缘节点，根据您的位置与实验组动态渲染
        </p>
      </div>
    </main>
  )
}