import { useState } from 'react';
import { FriendsProps } from './types';

export const Friends = (props: FriendsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='friends__header' onClick={() => setIsOpen(!isOpen)}>
        Друзья: <span>{props.friendsCount}</span>
      </div>
      {isOpen && (
        <div className='friends__body'>
          {props.friends.map((friend, index) => (
            <p key={index}>{`${friend.first_name} ${friend.last_name}`}</p>
          ))}
        </div>
      )}
    </>
  );
};
