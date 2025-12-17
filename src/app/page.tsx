import {
  ArrowTopRightOnSquareIcon,
  BookOpenIcon,
  UserGroupIcon,
  SparklesIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

// Data for the projects with enhanced styling info
const projects = [
  {
    title: "The Color Purple",
    author: "Alice Walker",
    url: "https://abadname06.github.io/The_Color_Purple_by_Alice_Walker/",
    description:
      "A profound exploration of the life of African American women in the early 20th century south.",
    members: [
      "Angela Abad",
      "Rialyn Camposano",
      "Yezsha Narvaez",
      "Princess Diane Rosana",
    ],
    coverColor: "#5B4A8F",
    spineColor: "#4A3B75",
  },
  {
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    url: "https://switch-ka.github.io/GB2/",
    description:
      "An interactive journey through the misadventures of the ingenious gentleman Don Quixote of La Mancha.",
    members: [
      "Andreev Albert Ataiza",
      "Karl Christian Carlos",
      "Malbert Colarina",
      "Karl Arman De Vera",
      "Niño Miguel Naje",
    ],
    coverColor: "#2C4A6B",
    spineColor: "#1E3A5F",
  },
  {
    title: "Oedipus Rex",
    author: "Sophocles",
    url: "https://great-books-project.vercel.app/",
    description:
      "Unfolding the Fate of a King - A timeless Greek tragedy exploring destiny, truth, and the tragic downfall of King Oedipus.",
    members: [
      "Karylle Dollesin",
      "Wendee Diane Llona",
      "Kristelle Anne Miranda",
      "Jon Eric Tripulca",
      "Jerald Jay Buban",
    ],
    coverColor: "#2D5A4B",
    spineColor: "#1F4538",
  },
  {
    title: "The Color Purple",
    author: "Alice Walker",
    url: "https://great-books.jaor13.app/",
    description:
      "An in-depth exploration of resilience, sisterhood, and the triumph of the human spirit in the face of oppression.",
    members: ["James Anthony O. Rosales"],
    coverColor: "#8B5A2B",
    spineColor: "#6B4423",
  },
  {
    title: "Literary Archive",
    author: "Various Authors",
    url: "https://gbfinal.onrender.com/",
    description:
      "A comprehensive literary archive featuring timeless classics including The Color Purple, The Road Not Taken by Robert Frost, and Homer's Iliad.",
    members: [
      "Sarah Abane",
      "Elaine Bertiz",
      "Richard Bilan",
      "Annika Cipriano",
      "Lord Zaro Fiber Quitanilla",
    ],
    coverColor: "#6B4E71",
    spineColor: "#523A5C",
  },
  {
    title: "Phaedra",
    author: "Seneca",
    url: "https://hempers.github.io/phaedra-blog/",
    description:
      "A powerful exploration of forbidden desire and tragic fate in this timeless Roman tragedy of passion and consequence.",
    members: ["Mae Anne Bongat"],
    coverColor: "#8B2635",
    spineColor: "#6B1829",
  },
  {
    title: "Don Quixote Quest",
    author: "Miguel de Cervantes",
    url: "https://don-quixote-quest.netlify.app/",
    description:
      "An immersive journey through the adventures of the idealistic knight-errant and his loyal squire Sancho Panza.",
    members: ["Valerie Joyce Soreda", "Grace Ann Lladone"],
    coverColor: "#C17817",
    spineColor: "#9A5E12",
  },
  {
    title: "Phaedra",
    author: "Seneca",
    url: "https://phaedra.vercel.app/",
    description:
      "A dramatic retelling of the tragic tale of love, betrayal, and destiny that has captivated audiences for centuries.",
    members: [
      "Jethro Owen Acuna",
      "Jella Marie Caceres",
      "Michael Lonceras",
      "Christopher James Sayson",
      "John Russel Soreda",
    ],
    coverColor: "#7B3F61",
    spineColor: "#5F2E4A",
  },
  {
    title: "The Knight's Quest",
    author: "Miguel de Cervantes",
    url: "https://qwynth.github.io/precious.github.io/",
    description:
      "An epic adventure following the idealistic knight Don Quixote in his quest for chivalry, honor, and timeless glory.",
    members: ["Precious Gwynth Mallo"],
    coverColor: "#4A7C8E",
    spineColor: "#356173",
  },
  {
    title: "The Iliad",
    author: "Homer",
    url: "https://laizaaaaa.github.io/Iliad_Website/",
    description:
      "Homer's timeless epic of war, honor, and destiny chronicling the legendary Trojan War and its heroic warriors.",
    members: ["Ken Anne Acosta", "Laiza Barias"],
    coverColor: "#A04B2B",
    spineColor: "#7D3620",
  },
  {
    title: "Annabel Lee Archive",
    author: "Edgar Allan Poe",
    url: "https://sleepy-j.github.io/annabel-lee-archive/",
    description:
      "A sepulchral archive dedicated to Poe's haunting poem of love and loss that transcends even death itself.",
    members: ["Jay Balane", "Fredrick Depante", "Ken Tominaga"],
    coverColor: "#2E3A52",
    spineColor: "#1F2838",
  },
];

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Enhanced paper texture background with multiple layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base paper texture */}
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='6' /%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23noise)' opacity='0.08' /%3E%3C/svg%3E")`,
          }}
        />

        {/* Subtle aged paper spots */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(210, 180, 140, 0.06) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(139, 115, 85, 0.04) 0%, transparent 40%),
              radial-gradient(circle at 60% 20%, rgba(160, 140, 120, 0.05) 0%, transparent 45%)
            `,
          }}
        />

        {/* Very subtle horizontal lines (like aged paper) */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 98px,
              rgba(139, 115, 85, 0.02) 98px,
              rgba(139, 115, 85, 0.02) 100px
            )`,
          }}
        />
      </div>

      {/* Enhanced vignette effect with multiple layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, transparent 50%, rgba(232, 220, 200, 0.15) 80%, rgba(210, 190, 170, 0.25) 100%)",
          }}
        />

        {/* Corner darkening for book-like effect */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to bottom, rgba(139, 115, 85, 0.02) 0%, transparent 20%, transparent 80%, rgba(139, 115, 85, 0.02) 100%),
              linear-gradient(to right, rgba(139, 115, 85, 0.01) 0%, transparent 10%, transparent 90%, rgba(139, 115, 85, 0.01) 100%)
            `,
          }}
        />
      </div>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24 relative z-10">
        {/* Hero Section */}
        <section
          className="text-center mb-24 md:mb-32 lg:mb-40 relative bg-gradient-to-b from-transparent via-[rgba(184,134,11,0.02)] to-transparent py-8 md:py-12"
          aria-labelledby="hero-heading"
        >
          {/* Elegant ornamental decoration */}
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#8B6914]/40"></div>
              <svg
                className="w-14 h-14 md:w-16 md:h-16 text-[#8B6914]/40"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#8B6914]/40"></div>
            </div>
          </div>

          {/* Course badge */}
          <div className="inline-flex items-center justify-center p-2 md:p-3 mb-8 md:mb-10 rounded-full bg-gradient-to-r from-[rgba(184,134,11,0.05)] to-[rgba(212,164,116,0.05)] border border-[rgba(212,164,116,0.2)]">
            <span className="px-4 py-2 md:px-6 md:py-2.5 text-[10px] md:text-xs font-bold tracking-[0.25em] text-[var(--foreground)] uppercase">
              GEC 21 · Great Books
            </span>
          </div>

          {/* Main heading with enhanced typography */}
          <h1
            id="hero-heading"
            className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight text-[var(--foreground)] mb-8 md:mb-10 leading-[0.95]"
          >
            <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-[var(--text-muted)] mb-2 md:mb-4">
              BSIT 4C
            </span>
            <span className="italic text-gold-gradient block">Literary Compilations</span>
          </h1>

          {/* Decorative separator */}
          <div className="flex justify-center items-center gap-4 md:gap-6 mb-8 md:mb-10">
            <div className="h-[1px] w-16 md:w-20 bg-gradient-to-r from-transparent via-[var(--accent-gold)]/30 to-[var(--accent-gold)]/60"></div>
            <AcademicCapIcon className="w-5 h-5 md:w-6 md:h-6 text-[var(--accent-gold)]/60" />
            <div className="h-[1px] w-16 md:w-20 bg-gradient-to-l from-transparent via-[var(--accent-gold)]/30 to-[var(--accent-gold)]/60"></div>
          </div>

          {/* Subtitle with improved typography */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[var(--text-muted)] font-serif leading-[1.4] italic mb-4">
              Curated collections of literary wisdom.
            </p>
          </div>
        </section>

        {/* Section Divider */}
        <div className="flex justify-center items-center py-8 md:py-12">
          <div className="flex items-center gap-6 md:gap-8">
            <div className="h-[1px] w-16 md:w-24 bg-gradient-to-r from-transparent to-[var(--accent-gold)]/20"></div>
            <SparklesIcon className="w-6 h-6 md:w-7 md:h-7 text-[var(--accent-gold)]/40" />
            <div className="h-[1px] w-16 md:w-24 bg-gradient-to-l from-transparent to-[var(--accent-gold)]/20"></div>
          </div>
        </div>

        {/* Featured Collections Section */}
        <section
          className="mb-12 bg-gradient-to-b from-[rgba(210,180,140,0.03)] via-transparent to-[rgba(232,220,200,0.02)] py-8 md:py-12"
          aria-labelledby="collections-heading"
        >
          <header className="mb-8 md:mb-10 animate-[slideInFromLeft_0.8s_ease-out_0.1s_both]">
            <div className="flex items-center justify-center gap-3 md:gap-4 mb-8 md:mb-10">
              <BookOpenIcon className="w-5 h-5 md:w-6 md:h-6 text-[var(--accent-gold)]/60" />
              <h2
                id="collections-heading"
                className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[var(--text-muted)] tracking-tight"
              >
                Featured Collections
              </h2>
              <BookOpenIcon className="w-5 h-5 md:w-6 md:h-6 text-[var(--accent-gold)]/60" />
            </div>
          </header>

          {/* Projects Grid - Books on a shelf */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto mb-20">
            {projects.map((project, index) => (
              <article
                key={index}
                className="book-card group relative flex flex-col h-full rounded-r-md overflow-hidden"
                style={{
                  borderTopLeftRadius: "2px",
                  borderBottomLeftRadius: "2px",
                }}
              >
                {/* Enhanced book spine decoration */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-10 md:w-12 z-20 flex items-center justify-center shadow-2xl"
                  style={{
                    background: `linear-gradient(to right,
                    ${project.spineColor} 0%,
                    ${project.coverColor} 30%,
                    ${project.coverColor} 70%,
                    ${project.spineColor} 100%)`,
                    boxShadow: `2px 0 8px rgba(0, 0, 0, 0.3), inset -1px 0 0 rgba(255, 255, 255, 0.1), inset 1px 0 0 rgba(0, 0, 0, 0.2)`,
                  }}
                >
                  {/* Spine texture lines */}
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute h-px w-full bg-white/30"
                        style={{ top: `${(i + 1) * 12.5}%` }}
                      />
                    ))}
                  </div>

                  {/* Spine title */}
                  <div className="transform -rotate-90 origin-center relative z-10">
                    <p className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase whitespace-nowrap font-serif drop-shadow-sm">
                      {project.title.substring(0, 18)}
                    </p>
                  </div>
                </div>

                {/* Enhanced Card Header / Book Cover */}
                <div
                  className="h-44 md:h-52 relative overflow-hidden"
                  style={{
                    backgroundColor: project.coverColor,
                    boxShadow: `inset 0 0 50px rgba(0, 0, 0, 0.2)`,
                  }}
                >
                  {/* Multi-layer leather texture overlay */}
                  <div
                    className="absolute inset-0 opacity-25 mix-blend-overlay"
                    style={{
                      backgroundImage:
                        "url('https://www.transparenttextures.com/patterns/leather.png')",
                    }}
                  />

                  {/* Subtle embossed pattern */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `
                      radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.3) 1px, transparent 1px),
                      radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
                    `,
                      backgroundSize: "20px 20px",
                    }}
                  />

                  {/* Sophisticated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-black/40" />

                  {/* Elegant corner decorations */}
                  <div className="absolute top-4 right-4 w-10 h-10 md:w-12 md:h-12">
                    <div className="absolute inset-0 border-t-2 border-r-2 border-white/40 rounded-tr-md"></div>
                    <div className="absolute top-1 right-1 w-2 h-2 bg-white/30 rounded-full"></div>
                  </div>

                  {/* Decorative geometric pattern */}
                  <div className="absolute top-6 left-6 opacity-20">
                    <svg
                      className="w-8 h-8 md:w-10 md:h-10 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    >
                      <circle cx="12" cy="12" r="8" />
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 2v20M2 12h20" />
                    </svg>
                  </div>

                  {/* Enhanced text overlay with better positioning */}
                  <div className="absolute bottom-0 left-10 md:left-12 right-0 p-5 md:p-7 z-10">
                    <div className="bg-gradient-to-t from-black/70 via-black/50 to-transparent p-3 md:p-4 rounded-t-md">
                      <p className="text-white/95 text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase mb-2 md:mb-3 flex items-center gap-2 font-serif">
                        <BookOpenIcon className="w-3 h-3 md:w-4 md:h-4" />
                        {project.author}
                      </p>
                      <h2 className="font-serif text-xl md:text-3xl font-semibold text-white leading-tight drop-shadow-lg">
                        {project.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Enhanced Card Content - Book Pages */}
                <div className="flex-1 p-6 pl-12 md:p-9 md:pl-16 flex flex-col justify-between aged-paper relative">
                  {/* Page edges effect */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-r from-[#E8DCC8]/50 to-transparent"></div>
                  <div className="absolute left-1 top-0 bottom-0 w-1 bg-gradient-to-r from-[#D4A574]/30 to-transparent"></div>

                  {/* Page number decoration with book-like styling */}
                  <div className="absolute top-6 right-6 bg-[#FAF6ED] px-3 py-1 rounded-sm shadow-sm border border-[#D4A574]/30">
                    <div className="text-[10px] md:text-xs font-serif text-[#8B7355] italic font-medium">
                      Vol. {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Subtle page texture lines */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute h-px w-full bg-[#8B6914]"
                        style={{ top: `${(i + 1) * 5}%` }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10">
                    <div className="mb-6 md:mb-8">
                      <div className="mb-3">
                        <span className="inline-block w-8 h-[1px] bg-[#D4A574] mb-3"></span>
                      </div>
                      <p className="text-[#3C342A] text-sm md:text-base leading-[1.8] font-serif italic">
                        {project.description}
                      </p>
                    </div>

                    <div className="mb-6 md:mb-8 border-t border-dotted border-[#D4A574]/40 pt-5 md:pt-6">
                      <h3 className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-[#6B5A4A] uppercase tracking-wider mb-4 font-serif">
                        <UserGroupIcon className="w-3 h-3 md:w-4 md:h-4" />
                        Developed By
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                        {project.members.map((member, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 text-xs md:text-sm text-[#5C4A3A] font-serif group-hover:text-[#2C2520] transition-colors duration-300"
                          >
                            <span className="text-[#D4A574] text-lg leading-none">
                              •
                            </span>
                            <span className="leading-relaxed">{member}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Elegant book-like button */}
                  <div className="relative mt-auto">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/button relative inline-flex items-center justify-center w-full px-6 py-4 md:px-8 md:py-5 text-xs md:text-sm font-semibold tracking-[0.15em] uppercase text-white transition-all duration-300 font-serif overflow-hidden rounded-sm"
                      style={{
                        backgroundColor: project.coverColor,
                        boxShadow: `0 4px 12px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
                      }}
                    >
                      {/* Refined gradient overlay */}
                      <div className="absolute inset-0 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/15 to-white/5"></div>
                      </div>

                      {/* Subtle shine effect */}
                      <div className="absolute inset-0 opacity-0 group-hover/button:opacity-100 transition-all duration-500 delay-100">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover/button:translate-x-full transition-transform duration-700 ease-out"></div>
                      </div>

                      {/* Elegant border effect */}
                      <div className="absolute inset-0 border border-white/20 rounded-sm"></div>

                      <span className="relative z-10 flex items-center gap-2">
                        <span>Read Collection</span>
                        <ArrowTopRightOnSquareIcon className="h-4 w-4 md:h-5 md:w-5 transition-all duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1 group-hover/button:scale-110" />
                      </span>
                    </a>

                    {/* Enhanced shadow with book-like depth */}
                    <div
                      className="absolute -bottom-2 left-3 right-3 h-4 rounded-full blur-md transform scale-x-90 group-hover/button:scale-x-95 transition-all duration-300"
                      style={{
                        backgroundColor: `${project.coverColor}60`,
                        boxShadow: `0 8px 20px rgba(0, 0, 0, 0.2)`,
                      }}
                    ></div>

                    {/* Subtle page curl effect */}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300">
                      <div className="w-full h-full border-r-2 border-b-2 border-white/30 rounded-br-sm transform rotate-12"></div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Compact Footer */}
      <footer className="py-6 md:py-8 border-t border-[#D4A574]/30 bg-[#2A241E] relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-serif tracking-wide text-[#E8DCC8]/90 uppercase">
            BSIT-4C · GEC 21 Great Books · {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
