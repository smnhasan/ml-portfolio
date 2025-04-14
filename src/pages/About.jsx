import SectionTitle from '../components/SectionTitle';

export default function About() {
  return (
    <section className="container mx-auto px-4 py-10">
      <SectionTitle title="About Me" />
      <p className="text-gray-700 text-lg leading-relaxed">
        I'm a Machine Learning Software Engineer with a passion for building end-to-end AI products. With experience in deep learning, NLP, computer vision, and scalable backend systems, I bridge the gap between research and real-world applications.
      </p>
    </section>
  );
}