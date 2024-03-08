import { FormEvent, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FiltersProps } from './types';

export const Filters = ({ colors }: FiltersProps) => {
  const privacyRef = useRef<HTMLSelectElement>(null);
  const colorRef = useRef<HTMLSelectElement>(null);
  const friendsRef = useRef<HTMLSelectElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const onFilterClick = (evt: FormEvent) => {
    evt.preventDefault();

    if (privacyRef.current) {
      if (privacyRef.current.value !== '') {
        searchParams.set('privacy', privacyRef.current.value);
      } else {
        searchParams.delete('privacy');
      }
    }

    if (colorRef.current) {
      if (colorRef.current.value !== '') {
        searchParams.set('color', colorRef.current.value);
      } else {
        searchParams.delete('color');
      }
    }

    if (friendsRef.current) {
      if (friendsRef.current.value !== '') {
        searchParams.set('friends', friendsRef.current.value);
      } else {
        searchParams.delete('friends');
      }
    }

    setSearchParams(searchParams);
  };

  return (
    <form className='filters'>
      <p className='filters__title'>Фильтры</p>
      <label htmlFor='privacy'>Приватность</label>
      <select
        ref={privacyRef}
        name='privacy'
        id='privacy'
        defaultValue={searchParams.get('privacy') ?? ''}>
        <option value=''>Все</option>
        <option value='closed'>Закрытые</option>
        <option value='open'>Открытые</option>
      </select>

      <label htmlFor='color'>Цвет аватарки</label>
      <select
        ref={colorRef}
        name='color'
        id='color'
        defaultValue={searchParams.get('color') ?? ''}>
        <option value=''>Все</option>
        {colors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>

      <label htmlFor='friends'>Друзья в группе</label>
      <select
        ref={friendsRef}
        name='friends'
        id='friends'
        defaultValue={searchParams.get('friends') ?? ''}>
        <option value=''>Все</option>
        <option value='yes'>Да</option>
        <option value='no'>Нет</option>
      </select>

      <button type='submit' onClick={onFilterClick}>
        Фильтровать
      </button>
    </form>
  );
};
