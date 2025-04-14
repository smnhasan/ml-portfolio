export default function ProjectCard({ project }) {
  const { title, description, image, link, tags } = project;
  return (
    <div className="rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-700 mb-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map(tag => (
            <span key={tag} className="text-xs bg-gray-200 rounded px-2 py-1">{tag}</span>
          ))}
        </div>
        <a href={link} className="text-blue-600 text-sm" target="_blank" rel="noopener noreferrer">View Project →</a>
      </div>
    </div>
  );
}
