import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";

const items = [
  { label: "Home", action: () => scroll.scrollToTop() },
  { label: "About", action: () => scroll.scrollTo(document.getElementById("about").offsetTop) },
  { label: "Skills", action: () => scroll.scrollTo(document.getElementById("skills").offsetTop) },
  { label: "Projects", action: () => scroll.scrollTo(document.getElementById("projects").offsetTop) },
  { label: "Blog", route: "/blog" },
  { label: "Instagram", url: "https://instagram.com" },
  { label: "Twitter", url: "https://twitter.com" },
];

export default function CommandPalette({ open, onClose }) {
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const filtered = items.filter(i =>
    i.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "ArrowDown") setIndex(i => Math.min(i + 1, filtered.length - 1));
      if (e.key === "ArrowUp") setIndex(i => Math.max(i - 1, 0));
      if (e.key === "Enter") handleSelect(filtered[index]);
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [filtered, index, open]);

  const handleSelect = (item) => {
    onClose();
    if (item.route) navigate(item.route);
    else if (item.url) window.open(item.url, "_blank");
    else item.action();
  };

  if (!open) return null;

return (
  <div
    className="fixed inset-0 bg-black/60 flex justify-center items-start pt-32 z-50"
    onClick={onClose}   // 👈 click outside closes
  >
    <div
      className="bg-[#0d1117] w-[400px] rounded-xl p-4 shadow-xl"
      onClick={(e) => e.stopPropagation()} // 👈 prevent close when clicking inside
    >
      <input
        autoFocus
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search sections, pages, socials..."
        className="w-full bg-transparent border border-gray-700 px-3 py-2 rounded outline-none"
      />

      <ul className="mt-3">
        {filtered.map((item, i) => (
          <li
            key={item.label}
            className={`px-3 py-2 rounded cursor-pointer ${
              i === index ? "bg-cyan-400 text-black" : ""
            }`}
            onClick={() => handleSelect(item)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

}
