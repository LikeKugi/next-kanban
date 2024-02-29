import { FC, JSX } from 'react';
import { UniqueIdentifier } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import { Button, Card } from 'antd';
import { clsx } from 'clsx';
import { CSS } from '@dnd-kit/utilities';
import Meta from 'antd/es/card/Meta';

interface IKanbanItemProps {
  id: UniqueIdentifier;
  title: string;
}

const KanbanItem: FC<IKanbanItemProps> = ({ id, title }): JSX.Element => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: 'item',
    },
  });
  return (
    <Card ref={setNodeRef}
          {...attributes}
          style={{
            transition,
            transform: CSS.Translate.toString(transform),
          }}
          actions={[
            <Button type="dashed" {...listeners}
                    key={0}>Drag Handle</Button>
          ]}
          className={clsx(isDragging && 'opacity-50')}>
      <Meta title={title}/>
    </Card>
  );
};
export default KanbanItem;
