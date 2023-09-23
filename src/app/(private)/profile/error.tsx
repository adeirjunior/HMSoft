'use client' // Error components must be Client Components

import { useEffect } from 'react'
import { Button } from 'flowbite-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return <>
      <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8">
        <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">{error.name}</p>
        <p className="text-gray-500 mt-8 py-2 border-y-2 text-center">{error.message}</p>
      </div>
      <Button className="mx-auto my-20" onSubmit={() => reset()}>Try Again</Button>
  </>
}