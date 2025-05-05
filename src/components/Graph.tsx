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
          selector: 'node',
          style: {
            'background-color': '#f472b6', // pink-400
            label: 'data(label)',
            color: '#fff',
            'font-size': 14,
            'font-weight': 'bold',
            'text-valign': 'center',
            'text-halign': 'center',
            'text-outline-color': '#f472b6',
            'text-outline-width': 2,
            width: 50,
            height: 50,
            'border-width': 2,
            'border-color': '#ec4899', // pink-500
            'shape': 'ellipse'
          },
        },
        {
          selector: 'edge',
          style: {
            width: 'mapData(weight, 1, 10, 1, 6)',
            'line-color': '#f9a8d4', // pink-300
            'target-arrow-color': '#f9a8d4',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier'
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
