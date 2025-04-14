import SectionTitle from '../components/SectionTitle';
import BlogCard from '../components/BlogCard';
import posts from '../data/blogIndex.json';

export default function Blog() {
  return (
    <section className="container mx-auto px-4 py-10">
      <SectionTitle title="Blog" />
      <div className="grid gap-6">
        {posts.map(post => <BlogCard key={post.slug} post={post} />)}
      </div>
    </section>
  );
}
