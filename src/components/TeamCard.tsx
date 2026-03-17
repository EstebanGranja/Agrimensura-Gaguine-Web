import { MessageCircle } from 'lucide-react';
import { TeamMember } from '../data/team';

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="bg-[#D9D8C7] rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col md:flex-row">
      <div className="md:w-48 h-64 md:h-auto flex-shrink-0">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-bold text-[#26240B] text-xl mb-1">
            {member.name}
          </h3>
          <p className="text-[#26240B] font-medium text-sm mb-3">
            {member.title}
          </p>
          <p className="text-[#26240B] text-sm leading-relaxed">
            {member.bio}
          </p>
        </div>
        <div className="flex justify-end mt-4">
          <a
            href={member.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#20BD5A] transition-all duration-300"
          >
            <MessageCircle size={18} />
            Contactar
          </a>
        </div>
      </div>
    </div>
  );
}
