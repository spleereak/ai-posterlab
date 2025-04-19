export async function POST(req: Request) {
  const { prompt, size } = await req.json();

  return Response.json({
    imageUrl: `https://test.com/${size}?text=${prompt}`
  })
}