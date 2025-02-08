import { useState } from 'react'
import { motion } from 'framer-motion'

interface TabProps {
  label: string
  isActive: boolean
  onClick: () => void
}

function Tab({ label, isActive, onClick }: TabProps) {
  return (
    <motion.div
      className={`cursor-pointer p-4 transition-all duration-300 ease-in-out ${
        isActive
          ? 'border-l-4 border-[#C652EE] text-[#C652EE] font-bold'
          : 'text-[#C5C4CA] hover:text-[#C652EE]'
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.div>
  )
}

interface TabContentProps {
  heading: string
  yoe: string
  description: string[]
}

function TabContent({ heading, yoe, description }: TabContentProps) {
  return (
    <motion.div
      className="p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl text-[#C652EE] font-semibold mb-2">
        {heading.toUpperCase()}
      </h1>
      <h2 className="text-sm py-1 text-[#C5C4CA] mb-4">{yoe}</h2>
      <h3 className="text-lg pb-3 text-[#C5C4CA] font-medium">
        Key Responsibilities:
      </h3>
      <ul className="list-disc ps-6 space-y-2">
        {description.map((point, index) => (
          <li
            key={index}
            className="marker:text-[#C652EE] text-sm text-[#C5C4CA]"
          >
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

const tabs = [
  {
    id: 1,
    label: 'Gojoko Technology Pvt Ltd',
    heading: 'Frontend Developer',
    yoe: 'Oct 2022 - Present',
    description: [
      'Developed and maintained product websites and web apps using React.js, Next.js, and Angular, improving site performance by 25%.',
      "Led the development of Gojoko's new website using Next.js, resulting in a 30% increase in performance metrics and improved user engagement.",
      'Worked on a credit card project using React Native, reducing app load times by 20% and enhancing user satisfaction.',
      'Integrated GraphQL for efficient data management, improving data fetching times by 15%.',
      'Collaborated with cross-functional teams to optimize applications for speed and scalability, leading to a 25% increase in development efficiency.',
    ],
  },
  {
    id: 2,
    label: 'Newgen Software Pvt Ltd',
    heading: 'Senior Software Engineer',
    yoe: 'Sept 2020 - Oct 2022',
    description: [
      'Led a major process re-engineering project in React.js and React Native, enhancing service efficiency by 25% and reducing communication errors by 15%.',
      'Implemented micro frontend architecture using Webpack Module Federation to improve build times and deployment flexibility.',
      'Collaborated with product managers to design cutting-edge features and tools that enhanced user interaction in any browser.',
      'Developed a single-page web application using React, Redux, and TypeScript, enabling users to easily access company resources.',
      'Ensured top-notch code quality through peer reviews and implemented a CI/CD pipeline, reducing time-to-deployment from 5 days to 2 hours.',
    ],
  },
]

function Tabs() {
  const [activeTab, setActiveTab] = useState<number>(1)

  const handleClick = (tabId: number) => {
    setActiveTab(tabId)
  }

  return (
    <div className="grid md:grid-cols-12 gap-8">
      <div className="md:col-span-5">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            label={tab.label}
            isActive={activeTab === tab.id}
            onClick={() => handleClick(tab.id)}
          />
        ))}
      </div>
      <div className="md:col-span-7 border-l-4 border-[#C652EE] pl-4">
        <TabContent {...tabs.find((tab) => tab.id === activeTab)!} />
      </div>
    </div>
  )
}

export default Tabs
