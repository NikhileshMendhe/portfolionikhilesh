import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const svgFavicon = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%231d4ed8'/%3E%3Cstop offset='50%25' stop-color='%232563eb'/%3E%3Cstop offset='100%25' stop-color='%2306b6d4'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' rx='26' fill='url(%23bg)'/%3E%3Cpath d='M26 75 V25 H38 L62 62 V25 H74 V75 H62 L38 38 V75 Z' fill='%23ffffff'/%3E%3Ccircle cx='80' cy='22' r='7' fill='%2338bdf8'/%3E%3C/svg%3E`;

const links = document.querySelectorAll<HTMLLinkElement>("link[rel*='icon']");
if (links.length > 0) {
  links.forEach(link => {
    link.href = svgFavicon;
  });
} else {
  const newLink = document.createElement("link");
  newLink.rel = "icon";
  newLink.type = "image/svg+xml";
  newLink.href = svgFavicon;
  document.head.appendChild(newLink);
}

createRoot(document.getElementById("root")!).render(<App />);
