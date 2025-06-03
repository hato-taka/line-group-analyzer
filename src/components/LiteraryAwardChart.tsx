import dynamic from 'next/dynamic';
import React from "react";

// クライアントサイド限定でPlotを読み込む
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

const LiteraryAwardChart = () => {
  const boxPlotData = [
    {
      type: 'box' as const,
      name: 'たかし',
      y: [140, 130, 125, 135, 120, 100, 80],
      marker: { color: '#FF6384' },
      boxpoints: 'all' as const,
      jitter: 0.3,
      whiskerwidth: 0.2,
    },
    {
      type: 'box' as const,
      name: 'ゆりか',
      y: [90, 85, 95, 100, 110, 120, 70],
      marker: { color: '#36A2EB' },
      boxpoints: 'all' as const,
      jitter: 0.3,
      whiskerwidth: 0.2,
    },
    {
      type: 'box' as const,
      name: 'まさと',
      y: [105, 100, 98, 102, 110, 115, 108],
      marker: { color: '#FFCE56' },
      boxpoints: 'all' as const,
      jitter: 0.3,
      whiskerwidth: 0.2,
    },
  ];

  const layout = {
    paper_bgcolor: '#002b00',
    plot_bgcolor: '#002b00',
    font: { color: '#ffffff' },
    margin: { t: 40, l: 40, r: 40, b: 60 },
    showlegend: false, // 凡例を非表示
    yaxis: {
      title: { text: '発言文字数' },
      zeroline: false,
    },
    xaxis: {
      showline: true,
      showticklabels: true,
    },
  };

  return (
    <div className="w-full h-96 bg-[#002b00] p-4 rounded-xl">
      <Plot
        data={boxPlotData}
        layout={layout}
        config={{ displayModeBar: false, responsive: true }}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default LiteraryAwardChart;
