import { Service } from '../data/services';

interface ServiceCardProps {
  service: Service;
  onViewDetails: () => void;
}

export default function ServiceCard({ service, onViewDetails }: ServiceCardProps) {
  return (
    <div
      className="bg-[#D9D8C7] rounded-lg shadow-[0_4px_15px_rgba(38,36,11,0.2)] overflow-hidden transition-all duration-300 hover:shadow-[0_10px_25px_rgba(38,36,11,0.28)] hover:-translate-y-1 flex flex-col sm:flex-row sm:min-h-[11.5rem] lg:min-h-[10.75rem] cursor-pointer"
      onClick={onViewDetails}
      tabIndex={0}
      role="button"
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onViewDetails(); }}
    >
      <div className="h-36 sm:h-auto sm:w-40 md:w-40 lg:w-44 flex-shrink-0 bg-[#F2F1DF] p-2 lg:p-1.5">
        <div className="w-full h-full flex items-center justify-center group">
          <img
            src={service.image}
            alt={service.name}
            className="max-w-[80%] max-h-[80%] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>
      <div className="p-4 sm:p-5 lg:p-4 flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-bold text-[#26240B] text-lg sm:text-xl mb-2">
            {service.name}
          </h3>
          <p className="text-[#26240B] text-sm leading-relaxed mb-3 [display:-webkit-box] [-webkit-line-clamp:3] lg:[-webkit-line-clamp:2] [-webkit-box-orient:vertical] overflow-hidden">
            {service.description}
          </p>
        </div>
        <div className="flex justify-end mt-1 sm:mt-2 shrink-0">
          <button
            onClick={onViewDetails}
            className="bg-[#0D0D0D] text-[#F2F1DF] text-sm sm:text-base px-5 py-2 rounded-md font-medium hover:bg-[#26240B] transition-all duration-300"
          >
            Ver
          </button>
        </div>
      </div>
    </div>
  );
}
