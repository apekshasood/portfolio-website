import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='container mx-auto my-6'>
            <hr className='w-full border-t border-purple-600' />
            <div className='flex flex-wrap items-center justify-between p-8'>
                <Image
                    src="/images/Logo.svg"
                    alt="Home"
                    width={150}
                    height={150}
                />
                <div className="flex flex-row justify-center items-center space-x-8">
                    <Link href="email_link">
                        <Image src="/images/Email-Icon.svg" alt={''} width={20} height={20} />
                    </Link>
                    <Link href="linkedin_link">
                        <Image src="/images/LinkedIn-Icon.svg" alt={''} width={20} height={20} />
                    </Link>
                    <Link href="git_link">
                        <Image src="/images/Git-Icon.svg" alt={''} width={20} height={20} />
                    </Link>
                    <Link href="behance_link">
                        <Image src="/images/Behance-Icon.svg" alt={''} width={20} height={20} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer