import { UniqueIdentifier } from '@dnd-kit/core';

export interface IDND {
  id: UniqueIdentifier;
  title: string;
  items: {
    id: UniqueIdentifier;
    title: string;
  }[];
}
