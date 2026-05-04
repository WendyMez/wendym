import Image from "next/image";

const formations = [
    { year: "2013", desc: "Université Claude Bernard Lyon 1 – Doctorat en chirurgie dentaire" },
    { year: "2016", desc: "Université J. Monnet Saint-Étienne – DU anatomie appliquée à l'implantologie" },
    { year: "2017", desc: "SAPO Clinique – Chirurgie & prothèse sur implant" },
    { year: "2018", desc: "SAPO Clinique – Formation Parodontologie" },
    { year: "2019", desc: "Université de Strasbourg – DU Esthétique" },
    { year: "2021", desc: "SFPIO Paris – Cursus Parodontologie & Implantologie" },
    { year: "2023", desc: "CLINICALL – Formation Plan de traitement complexe" },
    { year: "2024/25", desc: "CLINICALL – Formation Occlusodontie" },
    { year: "2026", desc: "CLINICALL – Formation Pédodontie" },
];

export default function Formation() {
    return (
        <div className="shrink-0 w-full max-w-sm">
            <div className="flex flex-col items-center mb-6">
                <div className="relative w-44 h-44 mb-4">
                    <Image
                        src="/images/portrait-wendy-2.jpg"
                        alt="Dr Wendy Mezgueldi"
                        fill
                        className="rounded-full object-cover shadow-md ring-4 ring-teal-950/10"
                        priority
                    />
                </div>
                <p className="text-xs font-semibold tracking-widest uppercase text-teal-950/50">Parcours & Formations</p>
                <div className="w-8 h-0.5 bg-primary-600 mt-2" />
            </div>

            <div className="relative">
                <div className="absolute left-2 top-3 bottom-3 w-px bg-teal-950/15" />
                <ul className="space-y-3">
                    {formations.map(({ year, desc }) => (
                        <li key={year} className="flex items-start gap-3">
                            <div className="shrink-0 w-4 flex justify-center pt-1">
                                <div className="w-2 h-2 rounded-full bg-primary-600 ring-2 ring-white" />
                            </div>
                            <span className="shrink-0 text-xs font-bold text-primary-600 w-12 pt-px">{year}</span>
                            <span className="text-xs text-gray-600 leading-relaxed">{desc}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
