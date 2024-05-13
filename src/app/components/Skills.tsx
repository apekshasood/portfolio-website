import React from 'react'
import SkillsContainer from '../sharedComponents/SkillContainer'

const webDevelopmentSkills = [
    { name: 'Figma', percent: 60 },
    { name: 'Photoshop', percent: 70 },
    { name: 'Adobe XD', percent: 80 },
    { name: 'Wire-framing', percent: 70 },
    { name: 'Responsive Designing', percent: 80 },
    // Add more skills as needed
  ];

  const frontendSkills = [
    { name: 'HTML', percent: 90 },
    { name: 'CSS', percent: 90 },
    { name: 'React Native', percent: 85 },
    { name: 'React', percent: 85 },
    { name: 'Angular', percent: 65 },
    { name: 'Graphql', percent: 75 },
    { name: 'Tailwind', percent: 75 },
    // Add more skills as needed
  ];

const Skills = () => {
  return (
    <div className='container mx-auto my-6 bg-cover bg-center py-4' style={{ backgroundImage: `url('/images/Skill-bg.svg')` , opacity: 2 }}>
    <div className='items-center'>
      <h1 className='text-center text-4xl lg-text-6xl font-extrabold text-[#C5C4CA] py-12'>{"<Skills />"}</h1>
      <SkillsContainer webDevelopmentSkills={webDevelopmentSkills} frontendSkills={frontendSkills} />
    </div>
  </div>
  )
}

export default Skills