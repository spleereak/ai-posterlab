import {ImageCard} from "@/components/shared/ImageCard";

const mockImages = [
  {
    id: 1,
    url: "https://via.placeholder.com/300",
    prompt: "Заглушка 1",
    createdAt: "2025-04-14",
  },
  {
    id: 2,
    url: "https://via.placeholder.com/300",
    prompt: "Заглушка 2",
    createdAt: "2025-04-13",
  },
  {
    id: 3,
    url: "https://via.placeholder.com/300",
    prompt: "Заглушка 3",
    createdAt: "2025-04-13",
  },
  {
    id: 4,
    url: "https://via.placeholder.com/300",
    prompt: "Заглушка 4",
    createdAt: "2025-04-13",
  }
]

export default function GalleryPage() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {mockImages.map((image, index) => (
        <ImageCard
          key={image.id}
          id={image.id}
          url={image.url}
          prompt={image.prompt}
          createdAt={image.createdAt}
        />
      ))}
    </div>
  )
}