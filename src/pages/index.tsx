// ----------------------------------------------------------------------------------
// Este es el componente principal de la página "Home" que organiza el layout general de la aplicación.
// La estructura divide la pantalla en dos secciones principales:
// - Una barra lateral (SideBar).
// - El contenido principal (Header, Experience, Portfolio, Education, Knowledge, Footer).
// Ambas secciones son scrollables de manera independiente (overflow-y-auto), permitiendo una navegación fluida.
// ----------------------------------------------------------------------------------

import Education from "@/components/organisms/EducationSection";
import Experience from "@/components/organisms/ExperienceSection";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Knowledge from "@/components/organisms/KnowledgeSection";
import Portfolio from "@/components/organisms/PortfolioSection";
import SideBar from "@/components/organisms/SideBar";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-row space-x-5 p-5 overflow-hidden">
      <div className="w-1/4 h-full overflow-y-auto">
        <SideBar />
      </div>
      <div className="w-3/4 h-full overflow-y-auto">
        <Header />
        <Experience />
        <Portfolio />
        <Education />
        <Knowledge />
        <Footer />
      </div>
    </div>
  );
}
