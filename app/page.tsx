import Nav from "./Components/NavBar/page";
import { Main, SkillsSection, ProjectsSection, AboutSection,ContactSection } from './Components/Main/page'; // or wherever your file is

export default function Home() {
  return (
    <>
    <Nav/>
      <Main />            {/* Hero Section */}
      <SkillsSection />   {/* Technical Skills */}
      <ProjectsSection /> {/* Featured Work */}
      <AboutSection />    {/* Bio & Blogs */}
      <ContactSection />  {/* Contact Info */}
    </>
  );
}
