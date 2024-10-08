import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="container mx-auto my-6">
      <hr className="w-full border-t border-purple-600" />
      <div className="flex flex-wrap items-center justify-between p-8">
        <Image src="/images/Logo.svg" alt="Home" width={150} height={150} />
        <div className="flex flex-row justify-center items-center space-x-8">
          <Link href="mailto:your_email@example.com" aria-label="Email">
            <Image
              src="/images/Email-Icon.svg"
              alt="Email Icon"
              width={20}
              height={20}
              className="hover:scale-110 transition-transform duration-200"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Image
              src="/images/LinkedIn-Icon.svg"
              alt="LinkedIn Icon"
              width={20}
              height={20}
              className="hover:scale-110 transition-transform duration-200"
            />
          </Link>
          <Link
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Image
              src="/images/Git-Icon.svg"
              alt="GitHub Icon"
              width={20}
              height={20}
              className="hover:scale-110 transition-transform duration-200"
            />
          </Link>
          <Link
            href="https://www.behance.net/yourprofile"
            target="_blank"
            rel="noreferrer"
            aria-label="Behance"
          >
            <Image
              src="/images/Behance-Icon.svg"
              alt="Behance Icon"
              width={20}
              height={20}
              className="hover:scale-110 transition-transform duration-200"
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
