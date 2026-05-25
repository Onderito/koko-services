import { permanentRedirect } from "next/navigation";

export default function LegacyPrivateTourPage() {
  permanentRedirect("/our-services/private-tours");
}
