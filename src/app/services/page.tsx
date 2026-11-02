import { permanentRedirect } from "next/navigation";

// /services is the address people and AI assistants guess first; the hub lives at /our-services.
export default function ServicesRedirect() {
  permanentRedirect("/our-services");
}
