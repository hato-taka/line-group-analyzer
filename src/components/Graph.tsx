// components/Graph.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import cytoscape, { ElementDefinition } from 'cytoscape';

interface Props {
  elements: ElementDefinition[];
}

export const Graph: React.FC<Props> = ({ elements }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cy = cytoscape({
      container: containerRef.current,
      elements,
      style: [
        {
          selector: 'node[id = "takuma"]',
          style: { 'background-color': '#e6194b' }, // 赤
        },
        {
          selector: 'node[id = "natsuki"]',
          style: { 'background-color': '#3cb44b' }, // 緑
        },
        {
          selector: 'node[id = "yutaka"]',
          style: { 'background-color': '#ffe119' }, // 黄
        },
        {
          selector: 'node[id = "maki"]',
          style: { 'background-color': '#4363d8' }, // 青
        },
        {
          selector: 'node[id = "toya"]',
          style: { 'background-color': '#f58231' }, // オレンジ
        },
        {
          selector: 'node[id = "shun"]',
          style: { 'background-color': '#911eb4' }, // 紫
        },
        {
          selector: 'node',
          style: {
            'label': 'data(label)',
            'color': '#fff',
            'font-size': 14,
            'font-weight': 'bold',
            'text-valign': 'center',
            'text-halign': 'center',
            'text-outline-color': '#000',
            'text-outline-width': 2,
            'width': 'mapData(weight, 1, 10, 20, 100)',
            'height': 'mapData(weight, 1, 10, 20, 100)',
            'border-width': 'mapData(weight, 1, 10, 2, 8)',
            'border-color': '#333',
            'shape': 'ellipse'
          },
        },
        {
          selector: 'edge[borderStyle = "dotted"]',
          style: {
            'line-style': 'dotted'
          }
        },
        {
          selector: 'edge[borderStyle = "solid"]',
          style: {
            'line-style': 'solid'
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 'mapData(weight, 1, 10, 1, 6)',
            'line-color': '#f9a8d4',
            'target-arrow-color': '#f9a8d4',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
            'label': 'data(label)',
            'font-size': 14,
            'font-weight': 'bold',
            'color': '#fce7f3',
            'text-background-color': '#ec4899',
            'text-background-opacity': 1,
            'text-background-padding': '2px',
            'text-margin-y': -10
          },
        },
      ],
      layout: {
        name: 'circle'
      }
    });

    return () => {
      cy.destroy();
    };
  }, [elements]);

  return <div ref={containerRef} className="w-full h-full" />;
};
