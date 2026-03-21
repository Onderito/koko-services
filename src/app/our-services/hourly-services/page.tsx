import { permanentRedirect } from "next/navigation";

export default function LegacyHourlyServicesPage() {
  permanentRedirect("/our-services/hourly-chauffeur");
}
