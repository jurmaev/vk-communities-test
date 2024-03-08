import { Group } from '../../types';

export const GroupItem = (props: Group) => {
  const avatarColor = props.avatar_color ?? 'grey';

  return (
    <div className='group'>
      <div
        className='group__icon'
        style={{ backgroundColor: avatarColor }}></div>
      <div>
        <span className='group__name'>{props.name}</span>
        <span className='group__state'>
          {props.closed ? 'Закрытая' : 'Открытая'}
        </span>
        <p>Подписчики: {props.members_count}</p>
        {props.friends && (
          <p>
            Друзья: <span className='group__friends'>{props.friends.length}</span>
          </p>
        )}
      </div>
    </div>
  );
};
