// components/DebugLog.tsx
'use client';

import React from 'react';

type Props = {
  data: string;
};

export const DebugLog = ({ data }: Props) => {
  if (process.env.NEXT_PUBLIC_DEBUG !== 'true') return null;

  return (
    <div className="fixed bottom-0 left-0 w-full max-h-[40vh] overflow-y-auto bg-black text-green-400 text-xs p-2 z-50">
      <pre>{data}</pre>
    </div>
  );
};