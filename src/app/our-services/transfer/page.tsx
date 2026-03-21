import { permanentRedirect } from "next/navigation";

export default function LegacyTransferPage() {
  permanentRedirect("/our-services/transfers");
}
