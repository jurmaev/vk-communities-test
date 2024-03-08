import { Filter, Group } from '../types';

export function filterGroups(groups: Group[], filters: Filter): Group[] {
  console.log(groups)
  
  if (filters.privacy) {
    groups = groups.filter(
      (group) => group.closed === (filters.privacy === 'closed')
    );
  }

  if (filters.color) {
    groups = groups.filter((group) => group.avatar_color === filters.color);
  }

  if (filters.friends) {
    groups = groups.filter(
      (group) =>
        (group.friends && filters.friends === 'yes') ||
        (!group.friends && filters.friends === 'no')
    );
  }

  return groups;
}
