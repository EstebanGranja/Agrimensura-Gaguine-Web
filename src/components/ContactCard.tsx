import { Video as LucideIcon } from 'lucide-react';

interface ContactCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  link?: string;
  external?: boolean;
}

export default function ContactCard({ icon: Icon, label, value, link, external }: ContactCardProps) {
  const content = (
    <div className="bg-[#D9D8C7] rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center text-center">
      <div className="w-12 h-12 bg-[#26240B] rounded-full flex items-center justify-center mb-4">
        <Icon size={24} className="text-[#F2F1DF]" />
      </div>
      <h3 className="font-bold text-[#26240B] text-lg mb-2">
        {label}
      </h3>
      <p className="text-[#26240B] text-sm">
        {value}
      </p>
    </div>
  );

  if (link) {
    return (
      <a
        href={link}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
}
