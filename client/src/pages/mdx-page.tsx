import MDXContent from "../../mock/mdx-content.mdx"; // Assuming mdx-content.mdx is in the same directory

export default function MDXPage({ children }) {
  return (
    <div className="prose lg:prose-xl prose-img:rounded-xl prose-img:my-0 prose-a:text-blue-400">
      <div>
        <MDXContent />
        {children}
      </div>
    </div>
  );
}
