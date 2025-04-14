import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects.json';

export default function Projects() {
  return (
    <section className="container mx-auto px-4 py-10">
      <SectionTitle title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => <ProjectCard key={project.title} project={project} />)}
      </div>
    </section>
  );
}