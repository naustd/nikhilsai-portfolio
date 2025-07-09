export default function HoverProjLink({ imageUrl, siteUrl, altText }) {
  return (
    <div className="relative group w-80 h-40 cursor-pointer">
      <img
        src={imageUrl}
        alt={altText}
        className="w-ful h-full object-cover rounded"
      />
      <a
        href={siteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity rounded"
      >
        Visit Site
      </a>
    </div>
  );
}
