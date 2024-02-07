"use client"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SiteLayout from '@/src/shared/components/layouts/site-layout'
import { useEffect } from 'react'
import useUser from '@/src/hooks/useUser'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = useUser();
  const pathname = usePathname()
  const router = useRouter()


  useEffect(() => {

    const goLogin=()=>{
      if (pathname !== "/" && pathname !== "/auth/login" && pathname !== "/auth/register") {
        router.replace("/auth/login")
      }
    }
    user
        .refresh()
    
        .catch(() => {
     
          goLogin();
        })
        .finally(() => {
          // setIsLoading(false);
        });
  },[pathname])

  return (
    <SiteLayout>
    {children}
    </SiteLayout>
  )
}
