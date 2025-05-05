// lib/analyzer.ts
import { ElementDefinition } from 'cytoscape';

export const getDummyElements = (): ElementDefinition[] => {
  const nodes = [
    { data: { id: 'takuma', label: 'たくま', weight: 20 } },
    { data: { id: 'natsuki', label: 'なつき', weight: 7 } },
    { data: { id: 'yutaka', label: 'ゆたか', weight: 6 } },
    { data: { id: 'maki', label: 'まき', weight: 5 } },
    { data: { id: 'toya', label: 'とーや', weight: 4 } },
    { data: { id: 'shun', label: 'しゅん', weight: 6 } },
  ];

  const edges = [
    { data: { source: 'takuma', target: 'natsuki', weight: 9, label: '💖', borderStyle: 'solid' } },
    { data: { source: 'takuma', target: 'yutaka', weight: 6, label: '💬', borderStyle: 'dotted' } },
    { data: { source: 'natsuki', target: 'maki', weight: 8, label: '🎯', borderStyle: 'solid' } },
    { data: { source: 'maki', target: 'toya', weight: 4, label: '📣', borderStyle: 'dotted' } },
    { data: { source: 'shun', target: 'takuma', weight: 7, label: '👀', borderStyle: 'solid' } },
  ];

  return [...nodes, ...edges];
};
