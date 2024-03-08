import { useEffect } from 'react';
import { fetchGroups } from '../api/fetch-groups';
import { GroupStore } from '../store';
import { Group } from '../types';
import { observer } from 'mobx-react-lite';
import { GroupItem } from './group';
import { Filters } from './filters';
import { useSearchParams } from 'react-router-dom';
import { filterGroups } from '../utils';

export const App = observer(() => {
  const [searchParams] = useSearchParams();
  const filteredGroups = filterGroups(GroupStore.groups, {
    privacy: searchParams.get('privacy'),
    friends: searchParams.get('friends'),
    color: searchParams.get('color'),
  });
  const colors = [
    ...new Set(
      GroupStore.groups
        .map((group) => group.avatar_color)
        .filter((color) => color)
    ),
  ] as string[];

  useEffect(() => {
    GroupStore.setIsLoading(true);
    fetchGroups().then((groupsResponse) => {
      const groups: Group[] = groupsResponse.data ?? [];
      GroupStore.setGroups(groups);
      GroupStore.setIsLoading(false);
    });
  }, []);

  if (GroupStore.isLoading) {
    return <p className='message'>Загрузка...</p>;
  }

  return (
    <div className='container'>
      <Filters colors={colors} />

      {filteredGroups.length !== 0 ? (
        <>
          {filteredGroups.map((group) => (
            <GroupItem key={group.id} {...group} />
          ))}
        </>
      ) : (
        <p className='message'>По вашему запросу групп не найдено</p>
      )}
    </div>
  );
});
