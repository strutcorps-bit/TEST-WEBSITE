import HeroBanner from "@/components/HeroBanner";
import MapPanel from "@/components/MapPanel";
import ListingsPanel from "@/components/ListingsPanel";
import CommunityInfo from "@/components/CommunityInfo";
import SearchLinks from "@/components/SearchLinks";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <div className="flex" style={{ minHeight: "calc(100vh - var(--top-offset) - 9rem)" }}>
        <MapPanel />
        <ListingsPanel />
      </div>
      <CommunityInfo />
      <SearchLinks />
    </>
  );
}
