import type { Route } from "./+types/Roofing";
import Header from "../components/Header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "NewForce" },
    { name: "description", content: "Roofing Services" },
  ];
}


export default function Roofing() {
  return (
    <Header currentPage="roofing"/>
  );
}