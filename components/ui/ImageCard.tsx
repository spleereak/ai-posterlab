type ImageCardProps = {
  id: number;
  src: string;
  prompt: string;
  createdAt: string;
}

export function ImageCard({
  id,
  src,
  prompt,
  createdAt
}: ImageCardProps) {
  return (
    <div className='rounded-xl shadow-md overflow-hidden border p-2'>
      <img src={src} alt={prompt} className='rounded-md object-cover h-64 w-full' />
      <div className='mt-2 text-sm text-gray-700'>{prompt}</div>
      <div className='text-xs text-gray-400'>{createdAt}</div>
    </div>
  )
}