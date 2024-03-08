import { useEffect } from 'react';
import { fetchGroups } from '../api/fetch-groups';
import { GroupStore } from '../store';
import { Group } from '../types';
import { observer } from 'mobx-react-lite';
import { GroupItem } from './group';

export const App = observer(() => {
  useEffect(() => {
    fetchGroups().then((groupsResponse) => {
      const groups: Group[] = groupsResponse.data ?? [];
      GroupStore.setGroups(groups);
    });
  }, []);

  return (
    <div className='container'>
      {GroupStore.groups.map((group) => (
        <GroupItem key={group.id} {...group} />
      ))}
    </div>
  );
});
