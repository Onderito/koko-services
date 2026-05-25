import { permanentRedirect } from "next/navigation";

type Props = { params: Promise<{ city: string }> };

export default async function LegacyChauffeurTourCityPage({ params }: Props) {
  const { city } = await params;
  permanentRedirect(`/our-services/private-tours/${city}`);
}
