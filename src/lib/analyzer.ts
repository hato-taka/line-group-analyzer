// lib/analyzer.ts
import { ElementDefinition } from 'cytoscape';

export const getDummyElements = (): ElementDefinition[] => {
  const nodes = [
    { data: { id: 'takuma', label: '👑たくま' } },
    { data: { id: 'natsuki', label: '💬なつき' } },
    { data: { id: 'yutaka', label: '🔥ゆたか' } },
    { data: { id: 'maki', label: '🎀まき' } },
    { data: { id: 'toya', label: '💡とーや' } },
    { data: { id: 'shun', label: '🐧しゅん' } },
  ];

  const edges = [
    { data: { source: 'takuma', target: 'natsuki', weight: 8, label: '💖' } },
    { data: { source: 'takuma', target: 'yutaka', weight: 5, label: '💬' } },
    { data: { source: 'natsuki', target: 'maki', weight: 7, label: '🎯' } },
    { data: { source: 'maki', target: 'toya', weight: 4, label: '📣' } },
    { data: { source: 'shun', target: 'takuma', weight: 6, label: '👀' } },
  ];

  return [...nodes, ...edges];
};
