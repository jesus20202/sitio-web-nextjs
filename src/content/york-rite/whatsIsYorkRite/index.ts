export { overviewContent } from './overview';
export { historyContent } from './history';
export { connectContent } from './connect';
export { locatorContent } from './locator';
export { otherOrganizationsContent } from './other_organizations';

export const yorkRiteContent = {
  'overview': () => import('./overview').then(m => m.overviewContent),
  'history': () => import('./history').then(m => m.historyContent),
  'connect': () => import('./connect').then(m => m.connectContent),
  'locator': () => import('./locator').then(m => m.locatorContent),
  'other-organizations': () => import('./other_organizations').then(m => m.otherOrganizationsContent)
};