import SectionTitle from '../components/SectionTitle';

export default function Home() {
  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4">Hi, I'm a Machine Learning Engineer</h1>
      <p className="text-lg text-gray-700 mb-6">
        I build intelligent systems and scalable software solutions.
      </p>
      <a href="/projects" className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition">
        Explore My Work
      </a>
    </section>
  );
}
