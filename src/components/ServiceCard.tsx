import { Service } from '../data/services';

interface ServiceCardProps {
  service: Service;
  onViewDetails: () => void;
}

export default function ServiceCard({ service, onViewDetails }: ServiceCardProps) {
  return (
    <div className="bg-[#D9D8C7] rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col md:flex-row">
      <div className="md:w-48 h-48 md:h-auto flex-shrink-0">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-bold text-[#26240B] text-xl mb-2">
            {service.name}
          </h3>
          <p className="text-[#26240B] text-sm leading-relaxed mb-4">
            {service.description}
          </p>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onViewDetails}
            className="bg-[#0D0D0D] text-[#F2F1DF] px-6 py-2 rounded-md font-medium hover:bg-[#26240B] transition-all duration-300"
          >
            Ver
          </button>
        </div>
      </div>
    </div>
  );
}
