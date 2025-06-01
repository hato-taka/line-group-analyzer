import React, { useEffect, useRef } from 'react';
import cytoscape from 'cytoscape';

const nodeList = [
  { id: 'kenji', label: 'けんじ', color: '#92BFB1' },
  { id: 'aiko', label: 'あいこ', color: '#C24360' },
  { id: 'takashi', label: 'たかし', color: '#8C8C8C' },
  { id: 'shinji', label: 'しんじ', color: '#F4AC45' },
  { id: 'yuuko', label: 'ゆうこ', color: '#A27358' },
];

const emojiOptions = ['❤️', '⚡', '🔥', '😂', '💬', '👀', '👍', '❌', '🥺'];
const styleOptions = ['solid', 'dashed', 'dotted'];

const nodes = nodeList.map((node) => ({ data: node }));

// interface NodeData {
//     id: string;
//     label: string;
//     color: string;
// }

interface EdgeData {
    id: string;
    source: string;
    target: string;
    emoji: string;
    width: number;
    style: string;
}

const edges: { data: EdgeData }[] = [];

nodeList.forEach((source, i) => {
  const targets = nodeList.filter(t => t.id !== source.id);
  const shuffled = [...targets].sort(() => 0.5 - Math.random()).slice(0, 2); // 最大2本
  shuffled.forEach((target, j) => {
    edges.push({
      data: {
        id: `${source.id}_to_${target.id}`,
        source: source.id,
        target: target.id,
        emoji: emojiOptions[(i * 2 + j) % emojiOptions.length],
        width: (i + j) % 5 + 1,
        style: styleOptions[(i + j) % styleOptions.length],
      },
    });
  });
});

const elements = [...nodes, ...edges];

const RelationshipGraph = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cy = cytoscape({
      container: containerRef.current,
      elements,
      layout: {
        name: 'circle',
      },
      style: [
        {
          selector: 'node',
          style: {
            'background-color': 'data(color)',
            'label': 'data(label)',
            'color': '#fff',
            'text-valign': 'center',
            'text-halign': 'center',
            'font-size': 14,
            'width': 50,
            'height': 50,
          },
        },
        {
          selector: 'edge',
          style: {
            'width': 'data(width)',
            'line-style': (ele) => ele.data('style') as cytoscape.Css.LineStyle,
            'line-color': '#ffffff',
            'target-arrow-color': '#ffffff',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
            'label': 'data(emoji)',
            'font-size': 20,
            'color': '#fff',
            'text-background-opacity': 1,
            'text-background-color': '#0e3a20',
            'text-background-shape': 'roundrectangle',
            'text-background-padding': '4',
          },
        },
      ],
    });

    return () => {
      cy.destroy();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-[500px] bg-green-900 rounded-2xl" />;
};

export default RelationshipGraph;