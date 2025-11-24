export const runtime = 'edge' // 关键：声明运行在 Edge 上

export async function GET() {
  return new Response(JSON.stringify({
    message: 'Hello from Vercel Edge!',
    region: 'Edge Node (自动分配，全球分布)',
    timestamp: Date.now()
  }), {
    headers: { 'Content-Type': 'application/json' },
  })
}