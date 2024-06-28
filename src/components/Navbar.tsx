import {FC} from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar:FC = () => {
  return (
    <div className='flex justify-between items-center py-2'>
      <Link href="/" className='flex items-center space-x-2'>{/*logo*/}
        <div className='relative w-[30px] h-[30px]'>
          <Image src="/football-info.png" alt="icon" fill className='object-cover' />
        </div>
        <span className='text-2xl font-bold none md:block'>Thông tin bóng đá</span>
      </Link>
    </div>
  )
}

export default Navbar