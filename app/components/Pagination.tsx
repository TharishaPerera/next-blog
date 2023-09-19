'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
}

const PaginationControls: React.FC<PaginationControlsProps> = (
  {
    hasNextPage,
    hasPrevPage,
  }
) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '7'

  return (
    <div className='flex items-center justify-between my-10'>
      <button
        className={`flex items-center gap-2 border border-gray-700 hover:bg-gray-200 rounded-lg px-5 p-1 mt-5 dark:border-gray-200 dark:hover:bg-gray-700 ${!hasPrevPage && 'bg-gray-200 dark:bg-gray-700'}`}
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`)
        }}>
            <AiOutlineArrowLeft />
        Previous
      </button>

      <div className='mt-5'>
        {page} / {Math.ceil(10 / Number(per_page))}
      </div>

      <button
        className={`flex items-center gap-2 border border-gray-700 hover:bg-gray-200 rounded-lg px-5 p-1 mt-5 dark:border-gray-200 dark:hover:bg-gray-700 ${!hasNextPage && 'bg-gray-200 dark:bg-gray-700'}`}
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`)
        }}>
        Next
            <AiOutlineArrowRight />
      </button>
    </div>
  )
}

export default PaginationControls