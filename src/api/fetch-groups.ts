import { groupMocks } from '../mocks';
import { GetGroupsResponse } from '../types';

export async function fetchGroups(): Promise<GetGroupsResponse> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    const groups = groupMocks;
    return {
      result: 1,
      data: groups,
    };
  } catch {
    return {
      result: 0,
      data: undefined,
    };
  }
}
