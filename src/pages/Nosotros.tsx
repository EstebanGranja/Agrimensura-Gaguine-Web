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

        <div className="bg-[#D9DAC7] rounded-lg shadow-lg p-8 mb-12 text-center">
          <h3
            className="inline-flex flex-col items-center text-sm text-[#26240B] tracking-widest mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
          >
            <span>AGRIMENSURA GAGUINE</span>
            <span className="mt-1 block h-[2px] w-full max-w-xs rounded-full bg-[#26240B]/55" />
          </h3>
          <p className="text-[#26240B] text-lg leading-relaxed max-w-4xl mx-auto">
            Somos un estudio familiar con más de 27 años de experiencia en Agrimensura. Combinamos trayectoria y conocimiento con la energía de las nuevas generaciones para ofrecer soluciones claras, confiables y adaptadas a cada proyecto. Te invitamos a conocer al equipo que hace todo esto posible
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
