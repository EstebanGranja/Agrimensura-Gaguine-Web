import { Video as LucideIcon } from 'lucide-react';

interface ContactCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  link?: string;
  external?: boolean;
  compact?: boolean;
  iconColor?: string;
}

export default function ContactCard({ icon: Icon, label, value, link, external, compact = false, iconColor = '#F2F1DF' }: ContactCardProps) {
  const cardClassName = compact
    ? 'bg-[#D9D8C7] rounded-lg p-4 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center text-center'
    : 'bg-[#D9D8C7] rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center text-center';

  const iconContainerClassName = compact
    ? 'w-10 h-10 bg-[#26240B] rounded-full flex items-center justify-center mb-3'
    : 'w-12 h-12 bg-[#26240B] rounded-full flex items-center justify-center mb-4';

  const titleClassName = compact
    ? 'font-bold text-[#26240B] text-base mb-1'
    : 'font-bold text-[#26240B] text-lg mb-2';

  const valueClassName = compact
    ? 'text-[#26240B] text-xs'
    : 'text-[#26240B] text-sm';

  const content = (
    <div className={cardClassName}>
      <div className={iconContainerClassName}>
        <Icon size={compact ? 20 : 24} style={{ color: iconColor }} />
      </div>
      <h3 className={titleClassName}>
        {label}
      </h3>
      <p className={valueClassName}>
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
