import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-[#21242E] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <Image src="/images/Logo.svg" alt="Logo" width={150} height={50} />
          <div className="flex items-center space-x-6">
            <Link href="mailto:apekshasood03@gmail.com" aria-label="Email">
              <Image
                src="/images/Email-Icon.svg"
                alt="Email Icon"
                width={24}
                height={24}
                className="hover:opacity-80 transition-opacity duration-200"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/apeksha-sood/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Image
                src="/images/LinkedIn-Icon.svg"
                alt="LinkedIn Icon"
                width={24}
                height={24}
                className="hover:opacity-80 transition-opacity duration-200"
              />
            </Link>
            <Link
              href="https://github.com/apekshasood"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Image
                src="/images/Git-Icon.svg"
                alt="GitHub Icon"
                width={24}
                height={24}
                className="hover:opacity-80 transition-opacity duration-200"
              />
            </Link>
            <Link
              href="https://www.behance.net/apeksha13"
              target="_blank"
              rel="noreferrer"
              aria-label="Behance"
            >
              <Image
                src="/images/Behance-Icon.svg"
                alt="Behance Icon"
                width={24}
                height={24}
                className="hover:opacity-80 transition-opacity duration-200"
              />
            </Link>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-[#C5C4CA]">
          © {new Date().getFullYear()} Apeksha Sood. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
