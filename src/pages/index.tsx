import Education from "@/components/organisms/EducationSection";
import Experience from "@/components/organisms/ExperienceSection";
import Header from "@/components/organisms/Header";
import Knowledge from "@/components/organisms/KnowledgeSection";
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
        <Education />
        <Knowledge />
      </div>
    </div>
  );
}
