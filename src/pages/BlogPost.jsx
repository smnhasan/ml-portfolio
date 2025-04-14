import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import SectionTitle from '../components/SectionTitle';

export default function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    import(`../blog/${slug}.md`)
      .then(res => fetch(res.default).then(r => r.text()).then(setContent))
      .catch(() => setContent('# Not Found'));
  }, [slug]);

  return (
    <section className="container mx-auto px-4 py-10 prose max-w-3xl">
      <SectionTitle title={slug.replace(/-/g, ' ')} />
      <ReactMarkdown>{content}</ReactMarkdown>
    </section>
  );
}