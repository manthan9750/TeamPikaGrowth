export function setSEO({ title, description }) {
  document.title = title || "Team Pika Growth";

  const meta = document.querySelector("meta[name='description']");
  if (meta) {
    meta.setAttribute("content", description || "");
  }
}