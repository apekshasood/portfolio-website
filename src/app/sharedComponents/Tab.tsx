import { useState } from 'react'

interface TabProps {
  label: string
  isActive: boolean
  onClick: () => void
}

function Tab({ label, isActive, onClick }: TabProps) {
  return (
    <div
      className={`cursor-pointer p-4 transition-all duration-300 ease-in-out ${
        isActive
          ? 'border-l-4 border-[#C652EE] text-[#C652EE] font-bold'
          : 'text-[#C5C4CA] hover:text-[#C652EE]'
      }`}
      onClick={onClick}
    >
      {label}
    </div>
  )
}

interface TabContentProps {
  heading: string
  yoe: string
  description: string[]
}

function TabContent({ heading, yoe, description }: TabContentProps) {
  return (
    <div className="p-4">
      <h1 className="text-xl text-[#C652EE] font-semibold">
        {heading.toUpperCase()}
      </h1>
      <h2 className="text-sm py-1 text-[#C5C4CA]">{yoe}</h2>
      <h3 className="text-sm pb-3 text-[#C5C4CA] font-medium">
        Key Responsibilities:
      </h3>
      <ul className="list-disc ps-6">
        {description.map((point, index) => (
          <li
            key={index}
            className="marker:text-[#C652EE] text-sm text-[#C5C4CA]"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}

const tabs = [
  {
    id: 1,
    label: 'Gojoko Technology Noida',
    heading: 'Frontend Developer',
    yoe: 'Oct 2022 - Present',
    description: [
      'Design, develop, test and deploy design features in a timely manner.',
      'Continually work to ensure the user experience determines design choices.',
      'Work to achieve a balance between functional and aesthetic designs.',
      'Maintain brand consistency throughout the design process.',
      'Apply engineering best practices.',
      'Work to solve complex challenges with the utilization of modern web application development processes and standard methodologies.',
      'Create wireframes to illustrate advanced solutions for applications.',
      'Proven experience working with AngularJS and React Native.',
      'Wrote unit tests for components and services to ensure code stability and reduce bugs.',
    ],
  },
  {
    id: 2,
    label: 'Newgen Software Pvt Ltd Noida',
    heading: 'Sr. Software Engineer',
    yoe: 'Sept 2020 - Oct 2022',
    description: [
      'Made high-level contributions to a team leading site optimizations.',
      'Worked with teams to solve issues and find and implement efficiencies.',
      'Collaborated with product managers to design cutting-edge features.',
      'Worked to create tools that enhanced user interaction in any browser.',
      'Ensured the technology implemented promoted efficiency, speed, and smooth functionality.',
      'Continually tested the site for usability while addressing any bugs.',
      'Developed a single-page web application using React, Redux, and TypeScript that enabled users to access the company’s resources with ease.',
    ],
  },
]

function Tabs() {
  const [activeTab, setActiveTab] = useState<number>(1)

  const handleClick = (tabId: number) => {
    setActiveTab(tabId)
  }

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-5">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            label={tab.label}
            isActive={activeTab === tab.id}
            onClick={() => handleClick(tab.id)}
          />
        ))}
      </div>
      <div className="col-span-7 border-l-4 border-[#C652EE] pl-4">
        <TabContent {...tabs.find((tab) => tab.id === activeTab)!} />
      </div>
    </div>
  )
}

export default Tabs
