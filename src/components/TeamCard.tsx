import { TeamMember } from '../data/team';
import { Linkedin } from 'lucide-react';

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="group bg-[#D9D8C7] rounded-lg shadow-md overflow-hidden transform-gpu transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.01] flex flex-col md:flex-row max-w-5xl mx-auto">
      <div className="md:w-60 h-64 md:h-auto flex-shrink-0">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-bold text-[#26240B] text-xl mb-1 transition-all duration-300 group-hover:text-[#0D0D0D] group-hover:tracking-[0.015em]">
            {member.name}
          </h3>
          <p className="text-[#26240B] font-medium text-sm mb-3 transition-all duration-300 group-hover:text-[#1B1A08] group-hover:translate-x-0.5">
            {member.title}
          </p>
          <p className="text-[#26240B] text-sm leading-relaxed transition-colors duration-300 group-hover:text-[#1F1D08]">
            {member.bio}
          </p>
        </div>
        {member.linkedin && (
          <div className="flex justify-end mt-4">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#0A66C2]/85 text-white px-3 py-1.5 rounded-md hover:bg-[#094fa3]/90 transition-colors duration-300 font-medium text-xs"
              aria-label="LinkedIn de Francisco"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
