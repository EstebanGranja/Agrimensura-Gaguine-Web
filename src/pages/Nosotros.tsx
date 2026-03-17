import TeamCard from '../components/TeamCard';
import { team } from '../data/team';

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-[#F2F1DF] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#26240B] mb-6">
            Sobre Nosotros
          </h1>
        </div>

        <div className="bg-[#D9D8C7] rounded-lg shadow-lg p-8 mb-12">
          <p className="text-[#26240B] text-lg leading-relaxed text-center max-w-4xl mx-auto">
            Somos un estudio de Agrimensura con más de 30 años de trayectoria en la provincia de Córdoba.
            Brindamos soluciones técnicas, legales y catastrales con compromiso, precisión y experiencia.
            Atendemos en Córdoba y alrededores, de lunes a sábado de 08:00 a 20:00 hs.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#26240B] text-center mb-8">
            Nuestro Equipo
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
