import React from "react";

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='flex flex-col flex-1 px-6 py-8 max-w-6xl mx-auto w-full'>
      {children}
    </main>
  )
}