import SectionTitle from '../components/SectionTitle';
import SkillBadge from '../components/SkillBadge';
import skills from '../data/skills.json';

export default function Skills() {
  return (
    <section className="container mx-auto px-4 py-10">
      <SectionTitle title="Skills" />
      <div className="flex flex-wrap gap-3">
        {skills.map(skill => <SkillBadge key={skill} skill={skill} />)}
      </div>
    </section>
  );
}
