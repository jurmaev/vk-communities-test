import { makeAutoObservable } from 'mobx';
import { Group } from '../types';

export class GroupStore {
  groups: Group[] = [];
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setGroups(value: Group[]) {
    this.groups = value;
  }

  setIsLoading(value: boolean) {
    this.isLoading = value;
  }
}
