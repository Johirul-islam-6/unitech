import { ArchitcturalOrganization } from "@/components/UnitechArchitctural/ArchitcturalOrganization/ArchitcturalOrganization";
import { ArchtcturalBanner } from "@/components/UnitechArchitctural/ArchtcturalBanner/ArchtcturalBanner";
import { OurInfrastructure } from "@/components/UnitechArchitctural/OurInfrastructure/OurInfrastructure";
import { ProminentInitiatives } from "@/components/UnitechArchitctural/ProminentInitiatives/ProminentInitiatives";
import React from "react";

const Architctural = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto py-5">
        <ArchtcturalBanner />
        <ArchitcturalOrganization />
        <ProminentInitiatives />
        <OurInfrastructure />
      </div>
    </>
  );
};
export default Architctural;
