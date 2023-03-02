import Image from 'next/image'
import Link from 'next/link'
import { ImageStrapi } from 'lib/utils'

export interface CardProductProps {
  name: string
  description?: string
  img: string
}

export const CardProduct = ({ name, description, img }: CardProductProps) => {
  const url = name.replace(' ','-');
  return (
    <Link href={`/products/${url}`}>
      <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
        <Image
          className="h-48 w-full object-cover object-center"
          loader={() => ImageStrapi(img)}
          src={ImageStrapi(img)}
          width={500}
          height={500}
          alt="Product Image"
        />
        <div className="p-4">
          <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
            {name}
          </h2>
          <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
            {description}
          </p>
          <div className="flex items-center">
            <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
              $20.00
            </p>
            <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
              $25.00
            </p>
            <p className="ml-auto text-base font-medium text-green-500">
              20% off
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
