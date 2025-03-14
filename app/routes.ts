import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/LandingPage.tsx"), // Ruta principal "/"
  route("residentialconstruction", "routes/ResidentialConstruction.tsx"), // Ruta "/residentialconstruction"
  route("roofing", "routes/Roofing.tsx"), // Ruta "/roofing"
  route("homerenovations", "routes/HomeRenovations.tsx"), // Ruta "/homerenovations"
  route("commercialconstruction", "routes/CommercialConstruction.tsx"), // Ruta "/commercialconstruction"
  route("newhomeconstruction","routes/NewHomeConstruction.tsx"), // Ruta "/newhomeconstruction"
  route("kitchen&bath","routes/Kitchen & Bath.tsx") //Ruta "/kitchen&bath"
] satisfies RouteConfig;
