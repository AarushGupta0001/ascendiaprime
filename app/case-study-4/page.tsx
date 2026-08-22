import CaseStudyPage from "@/components/sections/CaseStudyPage";
import { caseStudies } from "@/lib/case-studies";

export default function Page() {
  return <CaseStudyPage caseStudy={caseStudies[3]} />;
}
