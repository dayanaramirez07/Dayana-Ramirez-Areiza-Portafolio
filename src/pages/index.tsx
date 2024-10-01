import Education from "@/components/organisms/EducationSection";
import Experience from "@/components/organisms/ExperienceSection";
import Header from "@/components/organisms/Header";
import Knowledge from "@/components/organisms/KnowledgeSection";
import SideBar from "@/components/organisms/SideBar";

export default function Home() {
  return (
    <div className="w-full flex flex-row space-x-5 p-5">
      <div className="w-1/4">
        <SideBar />
      </div>
      <div className="w-3/4">
        <Header />
        <Knowledge />
        <Education />
        <Experience />
      </div>
    </div>
  );
}
