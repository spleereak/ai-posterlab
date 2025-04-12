'use client'


import {HeartIcon, Icon, ImageIcon, SparklesIcon} from "lucide-react";
import {useRouter} from "next/navigation";
import {cn} from "@/lib/utils";

const navItems = [
  { label: 'Генерация', icon: SparklesIcon, path: '/generate' },
  { label: 'Галерея', icon: ImageIcon, path: '/gallery' },
  { label: 'Избранное', icon: HeartIcon, path: '/saved' }
]
export const Sidebar = () => {
  const router = useRouter()

  return(
    <aside className='h-full w-64 p-4 border-r bg-background flex flex-col items-start gap-4'>
      {navItems.map(({ label, icon: Icon, path }) => (
        <button
          key={label}
          title={label}
          onClick={() => router.push(path)}
          className={cn(
            'p-2 rounded-xl hover:bg-muted border border-gray-400 transition-colors',
            'flex w-[90%] gap-2 items-center justify-start'
          )}
        >
          <Icon className='w-5 h-5' />
          <h1>{label}</h1>
        </button>
      ))}
    </aside>
  )
}