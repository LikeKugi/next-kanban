import { FC, JSX } from 'react';
import { IKanbanColumnProps } from '@/entities/kanban/KanbanColumn/KanbanColumn.types';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { clsx } from 'clsx';
import { Button, Card, Space } from 'antd';
import Meta from 'antd/es/card/Meta';

const KanbanColumn: FC<IKanbanColumnProps> = ({ children, id, description, title, onAddItem }): JSX.Element => {

  const {
    attributes,
    setNodeRef,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: 'container',
    },
  });

  return (
    <Space
      direction="vertical"
      size={'middle'}
      {...attributes}
      ref={setNodeRef}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
        display: 'flex',
        minHeight: '100%'
      }}
      className={clsx(isDragging && 'opacity-50',)}
    >
      <Space direction="vertical"
             size={'middle'}
             style={{ display: 'flex' }}>
        <Card>
          <Meta title={title}
                description={description}/>
          <Button type="dashed"
                  {...listeners}
          >
            Drag Handle
          </Button>
        </Card>
      </Space>

      {children}
      <Button type="text"
              onClick={onAddItem}>
        Add Item
      </Button>
    </Space>
  );
};
export default KanbanColumn;
