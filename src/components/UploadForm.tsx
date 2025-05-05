// components/UploadForm.tsx
'use client';

import React from 'react';

interface Props {
  onParse: () => void;
}

export const UploadForm: React.FC<Props> = ({ onParse }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 実際のファイルは使わず、仮処理として onParse を呼ぶ
    e.preventDefault();
    onParse();
  };

  return (
    <div className="mb-4 text-center">
      <label className="block mb-2 text-sm font-medium text-gray-700">
        LINEトーク履歴をアップロードしてね
      </label>
      <input
        type="file"
        accept=".txt"
        onChange={handleChange}
        className="mx-auto block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full
                   file:border-0 file:text-sm file:font-semibold
                   file:bg-pink-100 file:text-pink-600 hover:file:bg-pink-200"
      />
    </div>
  );
};