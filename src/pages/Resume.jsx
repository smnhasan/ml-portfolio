import SectionTitle from '../components/SectionTitle';

export default function Resume() {
  return (
    <section className="container mx-auto px-4 py-10">
      <SectionTitle title="Resume" />
      <p className="mb-4">You can view or download my resume below.</p>
      <a
        href="/assets/resume.pdf"
        className="text-blue-600 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Resume
      </a>
    </section>
  );
}
