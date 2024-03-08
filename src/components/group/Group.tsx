import { Friends } from '../friends';
import { GroupProps } from './types';

export const GroupItem = (props: GroupProps) => {
  return (
    <div className='group'>
      {props.avatar_color && (
        <div
          className='group__icon'
          style={{ backgroundColor: props.avatar_color }}></div>
      )}
      <div>
        <span className='group__name'>{props.name}</span>
        <span className='group__state'>
          {props.closed ? 'Закрытая' : 'Открытая'}
        </span>
        <p>Подписчики: {props.members_count}</p>
        {props.friends && (
          <Friends
            friendsCount={props.friends.length}
            friends={props.friends}
          />
        )}
      </div>
    </div>
  );
};
