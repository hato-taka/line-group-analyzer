// app/page.tsx
"use client";

import React, { useState } from "react";
// import { Graph } from "@/components/Graph";
import { DebugLog } from "@/components/DebugLog";
import { UploadForm } from "@/components/UploadForm";
import { getDummyElements } from "@/lib/analyzer";
import StampRateChart from "@/components/StampRateChart";
import SilentKingChart from "@/components/SilentKingChart";
import RelationshipGraph from "@/components/RelationshipGraph";

export default function Home() {
  const [elements, setElements] = useState(getDummyElements());

  return (
    <main className="max-w-screen-sm mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-center mb-4 text-pink-600">
        文春グループ砲
      </h1>

      <UploadForm onParse={() => setElements(getDummyElements())} />

      {/* <div className="w-full h-[500px] border rounded-xl overflow-hidden mt-4">
        <Graph elements={elements} />
      </div> */}

      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">スタンプ芸人</h1>
        <StampRateChart />
      </div>

      <div className="p-4">
      <h1 className="text-xl font-bold mb-4">沈黙の支配者</h1>
        <SilentKingChart />
      </div>

      <div className="p-4">
      <h1 className="text-xl font-bold mb-4">蜜LINE相関図</h1>
        <RelationshipGraph />
      </div>

      

      <DebugLog data={JSON.stringify(elements, null, 2)} />
    </main>
  );
}
