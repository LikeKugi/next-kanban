'use client'
import { JSX, useState } from 'react';
import { IDND } from '@/shared/types';
import { UniqueIdentifier } from '@dnd-kit/core';
import HomeTitle from '@/entities/HomeTitle/HomeTitle';

const HomePage = (): JSX.Element => {

  const [containers, setContainers] = useState<IDND[]>([]);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [currentContainerId, setCurrentContainerId] =
    useState<UniqueIdentifier>();
  const [containerName, setContainerName] = useState('');
  const [itemName, setItemName] = useState('');
  const [showAddContainerModal, setShowAddContainerModal] = useState(false);
  const [showAddItemModal, setShowAddItemModal] = useState(false);

  return (
    <>
      <HomeTitle title={'Kanban Board'} />
    </>
  );
};
export default HomePage;
