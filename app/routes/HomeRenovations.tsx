import type { Route } from "./+types/HomeRenovations";
import Header from "../components/Header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New Force" },
    { name: "description", content: "Home Renovation Services" },
  ];
}


export default function HomeRenovations() {
  return (
    <Header currentPage="homerenovations"/>
  );
}