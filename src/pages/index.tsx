import Education from "@/components/organisms/EducationSection";
import Header from "@/components/organisms/Header";
import Knowledge from "@/components/organisms/KnowledgeSection";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <Knowledge />
      <Education />
    </div>
  );
}
