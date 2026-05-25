import { permanentRedirect } from "next/navigation";

export default function LegacyChauffeurToursPage() {
  permanentRedirect("/our-services/private-tours");
}
