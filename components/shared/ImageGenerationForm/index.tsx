'use client'

import {useState} from "react";
import {Button, Select, Textarea} from "@/components/ui";
import {SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/Select";
import {Loader2} from "lucide-react";
import {GenerationArea} from "@/components/shared/ImageGenerationForm/GenerationArea";
import {SelectSize} from "@/components/shared/ImageGenerationForm/SelectSize";
import {SelectModel} from "@/components/shared/ImageGenerationForm/SelectModel";

export function ImageGenerationForm() {
  const [prompt, setPrompt] = useState('');
  const [imageSize, setImageSize] = useState('512x512');
  const [model, setModel] = useState('Stable Diffusion');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (prompt.trim() === '') return;

    setIsGenerating(true);

    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className='rounded-lg shadow-lg p-6 space-y-6'>
      <h2 className='text-2xl font-bold text-gray-800'>Генерация изображений</h2>

      <div className='space-y-5'>
        <GenerationArea prompt={prompt} setPrompt={setPrompt} isGenerating={isGenerating} />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <SelectSize imageSize={imageSize} setImageSize={setImageSize} isGenerating={isGenerating} />

          <SelectModel model={model} setModel={setModel} isGenerating={isGenerating} />
        </div>

        <Button
          className='w-full py-6 cursor-pointer'
          onClick={handleGenerate}
          disabled={isGenerating || prompt.trim() === ''}
        >
          {isGenerating ? (
            <>
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
              Создаю изображение...
            </>
          ) : (
            "Сгенерировать"
          )}
        </Button>
      </div>

      {isGenerating && (
        <div className='mt-6 p-6 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center'>
          <div className='text-center'>
            <Loader2 className='mx-auto h-12 w-12 text-gray-400 animate-spin' />
            <p className='mt-2 text-sm text-gray-500'>Генерация изображения...</p>
          </div>
        </div>
      )}
    </div>
  )
}