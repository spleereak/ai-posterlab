import {Textarea} from "@/components/ui";
interface Props {
  prompt: string;
  setPrompt: (e: string) => void
  isGenerating: boolean
}

export const GenerationArea = ({
  prompt,
  setPrompt,
  isGenerating
}: Props) => {
  return (
    <div>
      <label htmlFor='prompt' className='block mb-2 text-sm font-medium text-gray-700'>
        Описание изображения
      </label>
      <Textarea
        id='prompt'
        placeholder='Что вы хотите сгенирировать?'
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className='min-h-32 w-full'
        disabled={isGenerating}
      />
    </div>
  )
}