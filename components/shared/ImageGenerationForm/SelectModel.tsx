import {Select} from "@/components/ui";
import {SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/Select";
import {Dispatch, SetStateAction} from "react";

interface Props {
  model: string;
  setModel: Dispatch<SetStateAction<string>>;
  isGenerating: boolean;
}

export const SelectModel = ({
  model,
  setModel,
  isGenerating
}: Props) => {
  return (
    <div>
      <label htmlFor='model' className='block mb-2 text-sm font-medium text-gray-700'>
        Модель генерации
      </label>
      <Select
        value={model}
        onValueChange={setModel}
        disabled={isGenerating}
      >
        <SelectTrigger id='model' className='w-full'>
          <SelectValue placeholder='Выберите модель' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='Stable Diffusion'>Stable Diffusion</SelectItem>
          <SelectItem value='DALL-E'>DALL-E</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}