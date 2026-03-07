import React, { useMemo, useState } from "react";
import aboutMe from "./assets/QuienSoy.jpeg";
import {
  Moon,
  Sun,
  Menu,
  X,
  MessageCircle,
  ArrowRight,
  Instagram,
  MapPin,
  Clock3,
} from "lucide-react";

const WHATSAPP_NUMBER = "573144610933";

const aboutArtist = {
  name: "Maria Montt",
  role: "Tatuadora y perforadora",
  image: aboutMe,
  description:
    "Soy una tatuadora joven apasionada por crear piezas con identidad, composición y carácter. Mi enfoque mezcla sensibilidad estética, detalle y una conexión real con cada idea para transformar conceptos personales en tatuajes que se sientan auténticos, limpios y bien pensados.",
};

const tattooStyles = [
  {
    name: "Blackwork",
    description:
      "Contrastes sólidos, masas negras y lectura visual potente para piezas con mucha presencia.",
    image:
      "https://images.unsplash.com/photo-1561377455-190afb395ed7?q=80&w=415&auto=format&fit=crop",
  },
  {
    name: "Linea fina",
    description:
      "Líneas finas, detalle limpio y composiciones elegantes para tatuajes más sutiles.",
    image:
      "https://images.unsplash.com/photo-1696401242638-5b1213edb708?q=80&w=388&auto=format&fit=crop",
  },
  {
    name: "Cybersigilism",
    description:
      "Símbolos digitales, geometrías afiladas y energía ritual que se entrelazan en formas futuristas.",
    image:
      "https://herway.net/wp-content/uploads/2024/10/Cyber-Sigilism-Collarbone-And-Shoulder-Tat-960x1200.jpg",
  },
  {
    name: "Ilustrativo",
    description:
      "Líneas claras, narrativas visuales y composición artística que transforman la piel en lienzo.",
    image:
      "https://i.pinimg.com/originals/d4/96/6a/d4966adc14287911edfc3e3d54eb4a11.jpg",
  },
  {
    name: "Lettering",
    description:
      "Tipografía, símbolos y frases con composición cuidada y mucha personalidad.",
    image:
      "https://i.pinimg.com/originals/12/89/d3/1289d3f8810fdb2f30dea36e51b1eea2.jpg",
  },
  {
    name: "Ornamental",
    description:
      "Patrones finos, simetría y ritmo visual para piezas más decorativas y fluidas.",
    image:
      "https://www.dovmestudyo.com/wp-content/uploads/2023/01/mandala-anlamli-dovmeler.webp",
  },
];

const piercingStyles = [
  {
    name: "Lóbulo",
    description:
      "Perforación clásica, delicada y versátil para composiciones simples o dobles.",
    image:
      "https://plus.unsplash.com/premium_photo-1723867363855-04008238fcab?q=80&w=467&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Helix",
    description:
      "Ubicación elegante en cartílago, perfecta para una estética fina y moderna.",
    image:
      "https://i.pinimg.com/736x/8a/1f/37/8a1f3729b9e908aa8689e56f438e5588.jpg",
  },
  {
    name: "Septum",
    description:
      "Una perforación con mucha personalidad, ideal para looks más marcados.",
    image:
      "https://th.bing.com/th/id/R.a176a9e35aa91f9997565c8e5f2aa5c8?rik=08iFhDlDebMmmw&pid=ImgRaw&r=0",
  },
  {
    name: "Nostril",
    description:
      "Minimalista y atemporal, perfecta para resaltar el rostro con sutileza.",
    image:
      "https://tse1.explicit.bing.net/th/id/OIP.HQgzKDbDELH6AGjJn8ofkAHaEn?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Ombligo",
    description:
      "Una opción llamativa y estética para composiciones corporales delicadas.",
    image:
      "https://i.pinimg.com/200x150/6e/3c/49/6e3c49bec88eb48d077ba63d81abe1dc.jpg",
  },
  {
    name: "Ceja",
    description:
      "Perforación con actitud y carácter, ideal para un look más alternativo.",
    image:
      "https://i.pinimg.com/originals/4c/6e/a9/4c6ea9035a675287b3416057e49630cf.jpg",
  },
];

const heroImage =
  "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=1600&q=80";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function buildWhatsAppMessage(data) {
  if (data.serviceType === "perforacion") {
    return [
      "Hola, quiero agendar una cita para perforación.",
      "",
      `Nombre: ${data.name}`,
      `Teléfono: ${data.phone}`,
      `Correo: ${data.email}`,
      `Tipo de servicio: Perforación`,
      `Tipo de perforación: ${data.piercingType}`,
      `Zona: ${data.piercingZone}`,
      `Joyería deseada: ${data.jewelry}`,
      `Fecha deseada: ${data.date}`,
      "",
      "Idea o descripción:",
      data.idea || "Sin descripción adicional.",
    ].join("\n");
  }

  return [
    "Hola, quiero agendar una cita para tatuaje.",
    "",
    `Nombre: ${data.name}`,
    `Teléfono: ${data.phone}`,
    `Correo: ${data.email}`,
    `Tipo de servicio: Tatuaje`,
    `Estilo de interés: ${data.style}`,
    `Tamaño aproximado: ${data.size}`,
    `Zona del cuerpo: ${data.zone}`,
    `Presupuesto estimado: ${data.budget}`,
    `Fecha deseada: ${data.date}`,
    "",
    "Idea o descripción:",
    data.idea || "Sin descripción adicional.",
  ].join("\n");
}

function SectionGallery({ id, title, items, isDark }) {
  return (
    <section
      id={id}
      className={cn("py-24", isDark ? "bg-black" : "bg-[#ede0d8]")}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <h3
            className={cn(
              "text-3xl font-bold tracking-[0.25em]",
              isDark ? "text-white" : "text-[#23191a]"
            )}
          >
            {title}
          </h3>

          <div
            className={cn(
              "mt-4 flex flex-wrap justify-center gap-6 text-xs tracking-[0.25em]",
              isDark ? "text-white/60" : "text-[#7b1e28]/60"
            )}
          >
            {items.map((item) => (
              <span key={item.name}>{item.name.toUpperCase()}</span>
            ))}
          </div>
        </div>

        <div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
            isDark ? "border border-white/20" : "border border-[#7b1e28]/16"
          )}
        >
          {items.map((item) => (
            <div
              key={item.name}
              className={cn(
                "group relative aspect-square overflow-hidden border",
                isDark ? "border-white/20" : "border-[#7b1e28]/16"
              )}
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div
                className={cn(
                  "absolute inset-0 flex items-center justify-center opacity-0 transition",
                  isDark
                    ? "bg-black/40 group-hover:opacity-100"
                    : "bg-[#2b181a]/48 group-hover:opacity-100"
                )}
              >
                <div className="px-6 text-center">
                  <h4 className="text-sm uppercase tracking-[0.3em] text-white">
                    {item.name}
                  </h4>

                  <p className="mt-3 text-xs leading-relaxed text-white/78">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function TattooLandingPage() {
  const [theme, setTheme] = useState("light");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [form, setForm] = useState({
    serviceType: "tatuaje",
    name: "",
    phone: "",
    email: "",
    style: "Blackwork",
    size: "",
    zone: "",
    budget: "",
    date: "",
    idea: "",
    piercingType: "Lóbulo",
    piercingZone: "",
    jewelry: "",
  });

  const isDark = theme === "dark";
  const isTattoo = form.serviceType === "tatuaje";
  const isPiercing = form.serviceType === "perforacion";

  const whatsappUrl = useMemo(() => {
    const msg = buildWhatsAppMessage(form);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  }, [form]);

  const floatingWhatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hola, quiero cotizar un tatuaje o una perforación."
  )}`;

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const msg = buildWhatsAppMessage(form);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const nav = [
    { label: "Inicio", href: "#inicio" },
    { label: "Tatuajes", href: "#tatuajes" },
    { label: "Perforaciones", href: "#perforaciones" },
    { label: "Quién soy", href: "#quien-soy" },
    { label: "Proceso", href: "#proceso" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <div
      className={cn(
        "min-h-screen w-full transition-colors duration-300",
        isDark ? "bg-[#070707] text-white" : "bg-[#ede0d8] text-[#1b1717]"
      )}
    >
      <div
        className={cn(
          "fixed inset-0 -z-10",
          isDark
            ? "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_20%),linear-gradient(to_bottom,#050505,#0b0b0b)]"
            : "bg-[radial-gradient(circle_at_top,rgba(122,24,36,0.14),transparent_24%),radial-gradient(circle_at_85%_18%,rgba(166,37,52,0.10),transparent_18%),linear-gradient(to_bottom,#efe3dc,#e7d7cf)]"
        )}
      />

      <header
        className={cn(
          "sticky top-0 z-50 border-b backdrop-blur-xl",
          isDark
            ? "border-white/10 bg-black/55"
            : "border-[#7b1e28]/12 bg-[#ede0d8]/70"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center border text-sm font-bold tracking-[0.25em]",
                isDark
                  ? "border-white/20 bg-white/[0.03] text-white"
                  : "border-[#7b1e28]/25 bg-[#7b1e28]/[0.05] text-[#7b1e28]"
              )}
            >
              .
            </div>
            <div>
              <p
                className={cn(
                  "text-[11px] uppercase tracking-[0.35em]",
                  isDark ? "text-white/55" : "text-[#7b1e28]/60"
                )}
              >
                MONTT.INK
              </p>
              <h1
                className={cn(
                  "text-sm font-semibold tracking-[0.2em]",
                  isDark ? "text-white" : "text-[#201718]"
                )}
              >
                STUDIO
              </h1>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "text-sm transition",
                  isDark
                    ? "text-white/75 hover:text-white"
                    : "text-[#4f3c3e] hover:text-[#7b1e28]"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center border transition hover:scale-105",
                isDark
                  ? "border-white/20 bg-white/[0.03] hover:bg-white/[0.07]"
                  : "border-[#7b1e28]/18 bg-[#fff8f5]/70 text-[#7b1e28] hover:bg-[#7b1e28]/10"
              )}
              aria-label="Cambiar tema"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="#contacto"
              className={cn(
                "hidden border px-5 py-2.5 text-sm font-semibold transition hover:scale-[1.02] md:inline-flex",
                isDark
                  ? "border-white/20 bg-white text-black"
                  : "border-[#8f1f2d] bg-[#8f1f2d] text-white shadow-lg shadow-[#8f1f2d]/15"
              )}
            >
              Reservar cita
            </a>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center border md:hidden",
                isDark
                  ? "border-white/20 bg-white/[0.03]"
                  : "border-[#7b1e28]/18 bg-[#fff8f5]/70 text-[#7b1e28]"
              )}
              aria-label="Abrir menú"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div
            className={cn(
              "border-t px-4 py-4 md:hidden",
              isDark ? "border-white/10" : "border-[#7b1e28]/10"
            )}
          >
            <div className="flex flex-col gap-4">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "text-sm transition",
                    isDark
                      ? "text-white/80 hover:text-white"
                      : "text-[#4f3c3e] hover:text-[#7b1e28]"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Antebrazo tatuado con calavera y patrones biomecánicos"
              className="h-full w-full object-cover"
            />
            <div
              className={cn(
                "absolute inset-0",
                isDark
                  ? "bg-[linear-gradient(to_bottom,rgba(0,0,0,0.62),rgba(0,0,0,0.42),rgba(0,0,0,0.82))]"
                  : "bg-[linear-gradient(to_bottom,rgba(31,10,13,0.48),rgba(31,10,13,0.20),rgba(31,10,13,0.64))]"
              )}
            />
            <div
              className={cn(
                "absolute inset-0",
                isDark
                  ? "bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_35%,rgba(0,0,0,0.55)_100%)]"
                  : "bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,rgba(80,14,19,0.08)_35%,rgba(61,10,14,0.36)_100%)]"
              )}
            />
          </div>

          <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-4xl">
              <p
                className={cn(
                  "mb-6 inline-flex items-center gap-2 border px-4 py-2 text-[11px] uppercase tracking-[0.32em] backdrop-blur-md",
                  isDark
                    ? "border-white/15 bg-white/[0.03] text-white/72"
                    : "border-[#d1a9ae]/60 bg-[#7b1e28]/15 text-white"
                )}
              >
                Tatuajes · Perforaciones
              </p>

              <h2 className="text-5xl font-black uppercase leading-[0.92] tracking-[-0.03em] text-white sm:text-6xl lg:text-8xl">
                MONTT.INK TATTOO
              </h2>

              <p
                className={cn(
                  "mx-auto mt-5 max-w-2xl text-sm leading-6 sm:text-base",
                  isDark ? "text-white/78" : "text-white/90"
                )}
              >
                Arte que marca tu piel.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#contacto"
                  className={cn(
                    "inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition hover:scale-[1.02]",
                    isDark
                      ? "bg-white text-black"
                      : "bg-[#8f1f2d] text-white shadow-lg shadow-[#8f1f2d]/20"
                  )}
                >
                  Reserva una cita <ArrowRight size={16} />
                </a>
                <a
                  href="#tatuajes"
                  className={cn(
                    "inline-flex items-center gap-2 border px-6 py-3 text-sm font-semibold backdrop-blur-md transition",
                    isDark
                      ? "border-white/15 bg-white/[0.03] text-white hover:bg-white/[0.06]"
                      : "border-white/20 bg-white/10 text-white hover:bg-white/15"
                  )}
                >
                  Ver servicios
                </a>
              </div>
            </div>
          </div>
        </section>

        <SectionGallery
          id="tatuajes"
          title="TATUAJES"
          items={tattooStyles}
          isDark={isDark}
        />

        <SectionGallery
          id="perforaciones"
          title="PERFORACIONES"
          items={piercingStyles}
          isDark={isDark}
        />

        <section
          id="quien-soy"
          className={cn("py-24", isDark ? "bg-black" : "bg-[#ede0d8]")}
        >
          <div className="mx-auto max-w-6xl px-6">
            <div
              className={cn(
                "border",
                isDark
                  ? "border-white/20 bg-black"
                  : "border-[#7b1e28]/16 bg-[#f5ebe6]"
              )}
            >
              <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                <div
                  className={cn(
                    "border-b lg:border-b-0 lg:border-r",
                    isDark ? "border-white/20" : "border-[#7b1e28]/16"
                  )}
                >
                  <div className="relative h-[420px] min-h-[620px] overflow-hidden sm:h-[520px] lg:h-full">
                    <img
                      src={aboutArtist.image}
                      alt={aboutArtist.name}
                      className={cn(
                        "h-full w-full object-cover",
                        isDark ? "grayscale" : "saturate-[0.9] contrast-[1.02]"
                      )}
                    />
                    <div
                      className={cn(
                        "absolute inset-0",
                        isDark
                          ? "bg-gradient-to-t from-black/45 via-black/10 to-transparent"
                          : "bg-gradient-to-t from-[#2b181a]/28 via-[#2b181a]/05 to-transparent"
                      )}
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                  <div>
                    <p
                      className={cn(
                        "text-[11px] uppercase tracking-[0.35em]",
                        isDark ? "text-white/45" : "text-[#7b1e28]/55"
                      )}
                    >
                      Tattoo artist
                    </p>

                    <h3
                      className={cn(
                        "mt-4 text-3xl font-bold uppercase tracking-[0.18em] sm:text-4xl",
                        isDark ? "text-white" : "text-[#23191a]"
                      )}
                    >
                      QUIÉN SOY
                    </h3>

                    <div
                      className={cn(
                        "mt-6 h-px w-full",
                        isDark ? "bg-white/15" : "bg-[#7b1e28]/15"
                      )}
                    />

                    <h4
                      className={cn(
                        "mt-8 text-xl uppercase tracking-[0.24em]",
                        isDark ? "text-white" : "text-[#23191a]"
                      )}
                    >
                      {aboutArtist.name}
                    </h4>

                    <p
                      className={cn(
                        "mt-3 text-[11px] uppercase tracking-[0.28em]",
                        isDark ? "text-white/45" : "text-[#7b1e28]/55"
                      )}
                    >
                      {aboutArtist.role}
                    </p>

                    <p
                      className={cn(
                        "mt-8 max-w-xl text-sm leading-7 sm:text-[15px]",
                        isDark ? "text-white/72" : "text-[#5c4748]"
                      )}
                    >
                      {aboutArtist.description}
                    </p>

                    <p
                      className={cn(
                        "mt-6 max-w-xl text-sm leading-7",
                        isDark ? "text-white/55" : "text-[#5c4748]"
                      )}
                    >
                      Cada diseño se trabaja con intención, cuidando la estética,
                      la ubicación en el cuerpo y la personalidad de la pieza para
                      que el resultado no sea solo un tatuaje, sino una obra que
                      realmente se sienta tuya.
                    </p>
                  </div>

                  <div className="mt-10 pt-8">
                    <a
                      href="#contacto"
                      className={cn(
                        "inline-flex items-center justify-center border px-6 py-3 text-[11px] uppercase tracking-[0.32em] transition",
                        isDark
                          ? "border-white/20 text-white hover:bg-white hover:text-black"
                          : "border-[#8f1f2d] bg-[#8f1f2d] text-white hover:bg-[#7b1e28]"
                      )}
                    >
                      Reserva una cita
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="proceso"
          className={cn("py-24", isDark ? "bg-[#070707]" : "bg-[#ede0d8]")}
        >
          <div className="mx-auto max-w-6xl px-6">
            <div
              className={cn(
                "border",
                isDark
                  ? "border-white/10 bg-black"
                  : "border-[#7b1e28]/16 bg-[#f5ebe6]"
              )}
            >
              <div className="grid lg:grid-cols-[0.34fr_0.66fr]">
                <div
                  className={cn(
                    "border-b p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-12",
                    isDark ? "border-white/10" : "border-[#7b1e28]/16"
                  )}
                >
                  <p
                    className={cn(
                      "text-[11px] uppercase tracking-[0.35em]",
                      isDark ? "text-white/45" : "text-[#7b1e28]/55"
                    )}
                  >
                    Cómo funciona
                  </p>

                  <h3
                    className={cn(
                      "mt-4 text-3xl font-bold uppercase tracking-[0.16em] sm:text-4xl",
                      isDark ? "text-white" : "text-[#23191a]"
                    )}
                  >
                    PROCESO
                    <br />
                    DE RESERVA
                  </h3>

                  <div
                    className={cn(
                      "mt-6 h-px w-full",
                      isDark ? "bg-white/10" : "bg-[#7b1e28]/15"
                    )}
                  />

                  <p
                    className={cn(
                      "mt-8 max-w-sm text-sm leading-7",
                      isDark ? "text-white/65" : "text-[#5c4748]"
                    )}
                  >
                    Un sistema simple, claro y directo para convertir una idea en
                    una cita real.
                  </p>
                </div>

                <div className="grid md:grid-cols-3">
                  {[
                    [
                      "01",
                      "Cuéntanos tu idea",
                      "Comparte referencia, tamaño, zona del cuerpo y estilo para aterrizar la propuesta visual.",
                    ],
                    [
                      "02",
                      "Recibe orientación",
                      "Definimos enfoque, composición, presupuesto y viabilidad de la pieza según tu concepto.",
                    ],
                    [
                      "03",
                      "Agenda por WhatsApp",
                      "Envías el formulario y continúas directo en el chat con toda la información ya organizada.",
                    ],
                  ].map(([n, title, text], index) => (
                    <div
                      key={n}
                      className={cn(
                        "p-8 sm:p-10 lg:p-12",
                        index !== 2 &&
                          (isDark
                            ? "border-b md:border-b-0 md:border-r border-white/10"
                            : "border-b md:border-b-0 md:border-r border-[#7b1e28]/16")
                      )}
                    >
                      <p
                        className={cn(
                          "text-[12px] font-semibold tracking-[0.3em]",
                          isDark ? "text-white/35" : "text-[#7b1e28]/50"
                        )}
                      >
                        {n}
                      </p>

                      <h4
                        className={cn(
                          "mt-6 text-xl font-semibold uppercase leading-tight tracking-[0.08em]",
                          isDark ? "text-white" : "text-[#23191a]"
                        )}
                      >
                        {title}
                      </h4>

                      <p
                        className={cn(
                          "mt-5 text-sm leading-7",
                          isDark ? "text-white/62" : "text-[#5c4748]"
                        )}
                      >
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className={cn("pb-24", isDark ? "bg-[#070707]" : "bg-[#ede0d8]")}
        >
          <div className="mx-auto max-w-6xl px-6">
            <div
              className={cn(
                "border",
                isDark
                  ? "border-white/10 bg-black"
                  : "border-[#7b1e28]/16 bg-[#f5ebe6]"
              )}
            >
              <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
                <div
                  className={cn(
                    "border-b p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-12",
                    isDark ? "border-white/10" : "border-[#7b1e28]/16"
                  )}
                >
                  <p
                    className={cn(
                      "text-[11px] uppercase tracking-[0.35em]",
                      isDark ? "text-white/45" : "text-[#7b1e28]/55"
                    )}
                  >
                    Contacto directo
                  </p>

                  <h3
                    className={cn(
                      "mt-4 text-3xl font-bold uppercase tracking-[0.16em] sm:text-4xl",
                      isDark ? "text-white" : "text-[#23191a]"
                    )}
                  >
                    AGENDA
                    <br />
                    TU CITA
                  </h3>

                  <div
                    className={cn(
                      "mt-6 h-px w-full",
                      isDark ? "bg-white/10" : "bg-[#7b1e28]/15"
                    )}
                  />

                  <p
                    className={cn(
                      "mt-8 max-w-sm text-sm leading-7",
                      isDark ? "text-white/65" : "text-[#5c4748]"
                    )}
                  >
                    Cuéntame tu idea y abre WhatsApp con el mensaje ya organizado.
                  </p>

                  <div className="mt-10 space-y-0">
                    {[
                      [
                        MapPin,
                        "Ubicación",
                        "Bucaramanga, Colombia · Atención con cita previa",
                      ],
                      [Clock3, "Horario", "Lunes a sábado · 10:00 AM a 7:00 PM"],
                      [Instagram, "Instagram", "@MONTT.INK"],
                    ].map(([Icon, label, value], index) => (
                      <div
                        key={label}
                        className={cn(
                          "flex items-start gap-4 py-5",
                          index !== 2 &&
                            (isDark
                              ? "border-b border-white/10"
                              : "border-b border-[#7b1e28]/14")
                        )}
                      >
                        <div
                          className={cn(
                            "flex h-10 w-10 shrink-0 items-center justify-center border",
                            isDark
                              ? "border-white/12 bg-white/[0.03] text-white"
                              : "border-[#7b1e28]/15 bg-[#7b1e28]/[0.04] text-[#7b1e28]"
                          )}
                        >
                          <Icon size={16} />
                        </div>
                        <div>
                          <p
                            className={cn(
                              "text-[11px] uppercase tracking-[0.28em]",
                              isDark ? "text-white/40" : "text-[#7b1e28]/55"
                            )}
                          >
                            {label}
                          </p>
                          <p
                            className={cn(
                              "mt-2 text-sm leading-6",
                              isDark ? "text-white/78" : "text-[#332526]"
                            )}
                          >
                            {value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "mt-10 inline-flex items-center gap-2 border px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] transition",
                      isDark
                        ? "border-white/20 bg-white text-black hover:bg-white/90"
                        : "border-[#8f1f2d] bg-[#8f1f2d] text-white hover:bg-[#7b1e28]"
                    )}
                  >
                    Abrir WhatsApp <MessageCircle size={16} />
                  </a>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className={cn(
                    "p-8 sm:p-10 lg:p-12",
                    isDark ? "bg-black" : "bg-[#f8efea]"
                  )}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label
                        className={cn(
                          "mb-2 block text-sm font-medium",
                          isDark ? "text-white/80" : "text-[#2a1d1e]"
                        )}
                      >
                        Tipo de servicio
                      </label>
                      <select
                        name="serviceType"
                        value={form.serviceType}
                        onChange={handleChange}
                        className={cn(
                          "h-12 w-full border px-4 text-sm outline-none transition",
                          isDark
                            ? "border-white/10 bg-white/[0.03] text-white focus:border-white/25"
                            : "border-[#7b1e28]/14 bg-[#fff8f5] text-[#23191a] focus:border-[#8f1f2d]/40"
                        )}
                      >
                        <option value="tatuaje">Tatuaje</option>
                        <option value="perforacion">Perforación</option>
                      </select>
                    </div>

                    <Field
                      label="Nombre"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      isDark={isDark}
                    />
                    <Field
                      label="Teléfono"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      isDark={isDark}
                    />
                    <Field
                      label="Correo"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      isDark={isDark}
                    />

                    {isTattoo && (
                      <div>
                        <label
                          className={cn(
                            "mb-2 block text-sm font-medium",
                            isDark ? "text-white/80" : "text-[#2a1d1e]"
                          )}
                        >
                          Estilo
                        </label>
                        <select
                          name="style"
                          value={form.style}
                          onChange={handleChange}
                          className={cn(
                            "h-12 w-full border px-4 text-sm outline-none ring-0 transition",
                            isDark
                              ? "border-white/10 bg-white/[0.03] text-white focus:border-white/25"
                              : "border-[#7b1e28]/14 bg-[#fff8f5] text-[#23191a] focus:border-[#8f1f2d]/40"
                          )}
                        >
                          {tattooStyles.map((style) => (
                            <option
                              key={style.name}
                              value={style.name}
                              className="text-black"
                            >
                              {style.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    {isTattoo && (
                      <>
                        <Field
                          label="Tamaño aprox."
                          name="size"
                          value={form.size}
                          onChange={handleChange}
                          placeholder="Ej: 12 cm"
                          required
                          isDark={isDark}
                        />
                        <Field
                          label="Zona del cuerpo"
                          name="zone"
                          value={form.zone}
                          onChange={handleChange}
                          placeholder="Ej: antebrazo"
                          required
                          isDark={isDark}
                        />
                        <Field
                          label="Presupuesto"
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          placeholder="Ej: 300.000 - 500.000"
                          required
                          isDark={isDark}
                        />
                      </>
                    )}

                    {isPiercing && (
                      <>
                        <div>
                          <label
                            className={cn(
                              "mb-2 block text-sm font-medium",
                              isDark ? "text-white/80" : "text-[#2a1d1e]"
                            )}
                          >
                            Tipo de perforación
                          </label>
                          <select
                            name="piercingType"
                            value={form.piercingType}
                            onChange={handleChange}
                            className={cn(
                              "h-12 w-full border px-4 text-sm outline-none ring-0 transition",
                              isDark
                                ? "border-white/10 bg-white/[0.03] text-white focus:border-white/25"
                                : "border-[#7b1e28]/14 bg-[#fff8f5] text-[#23191a] focus:border-[#8f1f2d]/40"
                            )}
                          >
                            {piercingStyles.map((item) => (
                              <option
                                key={item.name}
                                value={item.name}
                                className="text-black"
                              >
                                {item.name}
                              </option>
                            ))}
                          </select>
                        </div>

                        <Field
                          label="Zona"
                          name="piercingZone"
                          value={form.piercingZone}
                          onChange={handleChange}
                          placeholder="Ej: oreja izquierda"
                          required
                          isDark={isDark}
                        />
                        <Field
                          label="Joyería deseada"
                          name="jewelry"
                          value={form.jewelry}
                          onChange={handleChange}
                          placeholder="Ej: titanio, aro, stud"
                          required
                          isDark={isDark}
                        />
                      </>
                    )}

                    <Field
                      label="Fecha deseada"
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                      isDark={isDark}
                    />
                  </div>

                  <div className="mt-5">
                    <label
                      className={cn(
                        "mb-2 block text-sm font-medium",
                        isDark ? "text-white/80" : "text-[#2a1d1e]"
                      )}
                    >
                      Idea o descripción
                    </label>
                    <textarea
                      name="idea"
                      value={form.idea}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Cuéntanos tu idea, referencias, concepto, ubicación, estilo o detalles importantes."
                      className={cn(
                        "w-full border px-4 py-3 text-sm outline-none transition",
                        isDark
                          ? "border-white/10 bg-white/[0.03] text-white placeholder:text-white/35 focus:border-white/25"
                          : "border-[#7b1e28]/14 bg-[#fff8f5] text-[#23191a] placeholder:text-[#8a7072] focus:border-[#8f1f2d]/40"
                      )}
                    />
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      type="submit"
                      className={cn(
                        "inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition hover:scale-[1.02]",
                        isDark
                          ? "bg-white text-black"
                          : "bg-[#8f1f2d] text-white shadow-lg shadow-[#8f1f2d]/15"
                      )}
                    >
                      Enviar por WhatsApp <ArrowRight size={16} />
                    </button>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(
                        "inline-flex items-center gap-2 border px-6 py-3 text-sm font-semibold transition",
                        isDark
                          ? "border-white/15 bg-white/[0.03] text-white hover:bg-white/[0.06]"
                          : "border-[#7b1e28]/14 bg-[#8f1f2d]/[0.04] text-[#7b1e28] hover:bg-[#8f1f2d]/[0.08]"
                      )}
                    >
                      Previsualizar mensaje
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        className={cn(
          "border-t",
          isDark
            ? "border-white/10 bg-black"
            : "border-[#7b1e28]/12 bg-[#e7d7cf]"
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8",
            isDark ? "text-white/55" : "text-[#6d5558]"
          )}
        >
          <p>© 2026 Montt.ink Tattoo.</p>
          <div className="flex items-center gap-4">
            <a
              href="#inicio"
              className={cn(
                isDark ? "hover:text-white" : "hover:text-[#7b1e28]"
              )}
            >
              Inicio
            </a>
            <a
              href="#contacto"
              className={cn(
                isDark ? "hover:text-white" : "hover:text-[#7b1e28]"
              )}
            >
              Reservas
            </a>
            <a
              href={floatingWhatsappUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(
                isDark ? "hover:text-white" : "hover:text-[#7b1e28]"
              )}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>

      <a
        href={floatingWhatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-500/30 transition hover:scale-110"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
  required = false,
  isDark,
}) {
  return (
    <div>
      <label
        className={cn(
          "mb-2 block text-sm font-medium",
          isDark ? "text-white/80" : "text-[#2a1d1e]"
        )}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={cn(
          "h-12 w-full border px-4 text-sm outline-none transition",
          isDark
            ? "border-white/10 bg-white/[0.03] text-white placeholder:text-white/35 focus:border-white/25"
            : "border-[#7b1e28]/14 bg-[#fff8f5] text-[#23191a] placeholder:text-[#8a7072] focus:border-[#8f1f2d]/40"
        )}
      />
    </div>
  );
}