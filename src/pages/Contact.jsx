import SectionTitle from '../components/SectionTitle';

export default function Contact() {
  return (
    <section className="container mx-auto px-4 py-10">
      <SectionTitle title="Contact" />
      <form className="max-w-xl space-y-4">
        <input type="text" name="name" placeholder="Your Name" required className="w-full border p-2 rounded" />
        <input type="email" name="email" placeholder="Your Email" required className="w-full border p-2 rounded" />
        <textarea name="message" placeholder="Your Message" required className="w-full border p-2 rounded h-32"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
}
