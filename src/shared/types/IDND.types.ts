import { UniqueIdentifier } from '@dnd-kit/core';

export interface IItem {
  id: UniqueIdentifier;
  title: string;
}

export interface IDND {
  id: UniqueIdentifier;
  title: string;
  items: IItem[];
}
