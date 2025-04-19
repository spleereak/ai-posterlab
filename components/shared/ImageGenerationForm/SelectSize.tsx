import {Select} from "@/components/ui";
import {SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/Select";
import {Dispatch, SetStateAction} from "react";

interface Props {
  imageSize: string;
  setImageSize: Dispatch<SetStateAction<string>>;
  isGenerating: boolean;
}

export const SelectSize = ({
  imageSize,
  setImageSize,
  isGenerating
}: Props) => {
  return (
    <div>
      <label htmlFor='size' className='block mb-2 text-sm font-medium text-gray-700'>
        Размер изображения
      </label>
      <Select
        value={imageSize}
        onValueChange={setImageSize}
        disabled={isGenerating}
      >
        <SelectTrigger>
          <SelectValue placeholder='Выберите размер' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='256x256'>256x256</SelectItem>
          <SelectItem value='512x512'>512x512</SelectItem>
          <SelectItem value='1024x1024'>1024x1024</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}