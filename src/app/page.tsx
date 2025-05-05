// app/page.tsx
'use client';

import React, { useState } from 'react';
import { Graph } from '@/components/Graph';
import { DebugLog } from '@/components/DebugLog';
import { UploadForm } from '@/components/UploadForm';
import { getDummyElements } from '@/lib/analyzer';

export default function Home() {
  const [elements, setElements] = useState(getDummyElements());

  return (
    <main className="max-w-screen-sm mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-center mb-4 text-pink-600">
        文春グループ砲：密LINE相関図
      </h1>

      <UploadForm onParse={() => setElements(getDummyElements())} />

      <div className="w-full h-[500px] border rounded-xl overflow-hidden mt-4">
        <Graph elements={elements} />
      </div>

      <DebugLog data={JSON.stringify(elements, null, 2)} />
    </main>
  );
}