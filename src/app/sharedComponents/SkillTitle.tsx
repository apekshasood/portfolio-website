import React from 'react';

interface SkillTitleProps {
  name: string;
  percent: number;
}

function SkillTitle({ name, percent }: SkillTitleProps) {
  return (
    <div className="mb-4 py-3">
      <h3 className="text-md font-semibold">{name}</h3>
      <div className="w-full bg-gray-200 rounded-lg mt-1">
      <div
          className="bg-[#C652EE] text-xs leading-5 rounded-lg text-center text-white"
          style={{ width: `${percent}%` }}
        >
          {percent}%
        </div>
      </div>
    </div>
  );
}

export default SkillTitle;