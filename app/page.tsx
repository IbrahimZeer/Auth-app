import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import {Button} from "@/components/ui/button"
import { LoginBtn } from '@/components/auth/login-btn'

const font = Poppins({
  subsets:["latin"],
  weight:["600"]
})

export default function Home() {
  return (
    <main 
    className='flex h-full flex-col
    items-center justify-center bg-sky-500'>

      <div className='space-y-6 text-center'>
        <h1 className={cn(
          'text-6xl font-semibold text-white drop-shadow-md',
          font.className,
          )}>
        🔐Auth
        </h1>
        <p className='text-white text-lg'>
          A simple authentication Service
        </p>
        <div>
          
          <LoginBtn>
          <Button variant={"secondary"} size={"lg"}>
            Sign In
          </Button>
          </LoginBtn>
        </div>
      </div>
    </main>
  )
}
