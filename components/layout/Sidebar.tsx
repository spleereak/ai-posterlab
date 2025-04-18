'use client'


import {HeartIcon, Icon, ImageIcon, SparklesIcon} from "lucide-react";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import Link from "next/link";

const navItems = [
  { label: 'Генерация', icon: SparklesIcon, path: '/generate' },
  { label: 'Галерея', icon: ImageIcon, path: '/gallery' },
  { label: 'Избранное', icon: HeartIcon, path: '/saved' }
]
export const Sidebar = () => {
  const link = usePathname();
  console.log(link);

  return(
    <aside className='h-full w-64 p-4 border-r bg-background flex flex-col items-start gap-4'>
      {navItems.map(({ label, icon: Icon, path }) => (
        <Link
          href={path}
          key={label}
          title={label}
          className={cn(
            `p-2 rounded-xl ${link !== path && 'hover:bg-muted'} border border-gray-400 transition-colors flex w-[90%] gap-2 items-center justify-start`,
            link === path && 'bg-black text-white font-bold'
          )}
        >
          <Icon className='w-5 h-5' />
          <h1>{label}</h1>
        </Link>
      ))}
    </aside>
  )
}