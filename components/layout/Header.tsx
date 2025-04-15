'use client'
import {User} from "lucide-react";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/Button";
import {useState} from "react";

export const Header = () => {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState();

  return (
    <header className="w-fulll h-16 px-6 flex items-center justify-between border-b border-muted bg-background sticky top-0 z-50">
      <h1 className="text-xl font-medium">AI PosterLab</h1>
      <div className="flex gap-4">
        <Button className='rounded-xl hover:cursor-pointer' onClick={() => router.push('/account')}>
          <User />
          {/* (здесь будет никнейм пользователя) */}
          <span>User</span>
        </Button>
      </div>
    </header>
  )
}