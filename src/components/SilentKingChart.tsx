import React, { useEffect, useState } from "react";

type UserData = {
  name: string;
  silentRate: number;
  color: string;
};

const data: UserData[] = [
  { name: "けんじ", silentRate: 0.95, color: "#92BFB1" },
  { name: "あいこ", silentRate: 0.92, color: "#C24360" },
  { name: "たかし", silentRate: 0.9, color: "#8C8C8C" },
  { name: "しんじ", silentRate: 0.86, color: "#F4AC45" },
  { name: "ゆうこ", silentRate: 0.8, color: "#A27358" },
];

const SilentKingChart = () => {
  const [mounted, setMounted] = useState(false);

  // マウント後にtrueにしてアニメーションを開始
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100); // 微小ディレイでトリガー
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-green-900 text-white p-6 rounded-2xl w-full max-w-xl mx-auto space-y-4">
      {data.slice(0, 5).map((user, index) => (
        <div key={index} className="flex items-center space-x-3">
          {/* 左の丸＋名前 */}
          <div className="flex flex-col items-center w-12">
            <div
              className="w-8 h-8 rounded-full"
              style={{ backgroundColor: user.color }}
            />
            <div className="text-xs font-bold text-center leading-tight mt-1">
              {user.name}
            </div>
          </div>

          {/* 横バー */}
          <div className="relative flex-1 bg-white/10 rounded-full h-6 overflow-hidden">
            <div
              className="h-full rounded-full flex items-center justify-end pr-2 text-white text-sm font-bold transition-[width] duration-1000"
              style={{
                width: mounted ? `${user.silentRate * 100}%` : "0%",
                backgroundColor: "#92BFB1",
              }}
            >
              {(user.silentRate * 100).toFixed(0)}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SilentKingChart;
