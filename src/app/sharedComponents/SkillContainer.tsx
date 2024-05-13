import SkillTitle from './SkillTitle';

interface Skill {
  name: string;
  percent: number;
}

interface SkillsContainerProps {
  webDevelopmentSkills: Skill[];
  frontendSkills: Skill[];
}

function SkillsContainer({ webDevelopmentSkills, frontendSkills }: SkillsContainerProps) {
  return (
    <div className="grid lg:grid-cols-2 grid-row-2 gap-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Web Development</h2>
        {webDevelopmentSkills.map((skill, index) => (
          <SkillTitle key={`webdev-${index}`} name={skill.name} percent={skill.percent} />
        ))}
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Frontend</h2>
        {frontendSkills.map((skill, index) => (
          <SkillTitle key={`frontend-${index}`} name={skill.name} percent={skill.percent} />
        ))}
      </div>
    </div>
  );
}

export default SkillsContainer;