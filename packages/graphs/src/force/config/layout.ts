export const DEFAULT_LAYOUT_OPTION = {
  velocityDecay: 0.15,
  forces: [
    { force: 'n-body', strength: -1600, distanceMin: 30, distanceMax: 800 },
    { force: 'collide', strength: 0.5, radius: (d: any) => d.cfg?.radius || 20, iterations: 1 },
    { force: 'link', id: (d: any) => d.id, distance: 200 },
    { force: 'x', strength: 0.1 },
    { force: 'y', strength: 0.1 },
    { force: 'center' }
  ]
};
