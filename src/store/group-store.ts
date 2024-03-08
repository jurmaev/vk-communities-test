import { makeAutoObservable } from 'mobx';
import { Group } from '../types';

export class GroupStore {
  groups: Group[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setGroups(value: Group[]) {
    this.groups = value;
  }
}
