import { Link } from 'react-router-dom';

export default function BlogCard({ post }) {
  const { title, summary, date, slug } = post;
  return (
    <div className="rounded-xl border p-4 hover:shadow-md transition">
      <h3 className="text-lg font-bold mb-1">
        <Link to={`/blog/${slug}`}>{title}</Link>
      </h3>
      <p className="text-xs text-gray-500 mb-2">{date}</p>
      <p className="text-sm text-gray-700">{summary}</p>
    </div>
  );
}
