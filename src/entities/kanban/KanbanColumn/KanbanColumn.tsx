import { FC, JSX } from 'react';
import { IKanbanColumnProps } from '@/entities/kanban/KanbanColumn/KanbanColumn.types';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { clsx } from 'clsx';
import { Button, Card, Space } from 'antd';
import Meta from 'antd/es/card/Meta';
import ColumnContainer from '@/shared/ui/ColumnContainer/ColumnContainer';
import AddItemButton from '@/features/AddItemButton/AddItemButton';

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
    <ColumnContainer {...attributes}
                     ref={setNodeRef}
                     className={clsx(isDragging && 'opacity-50',)}
                     style={{
                       transition,
                       transform: CSS.Translate.toString(transform),
                     }}>
      <Space
        direction="vertical"
        size={'middle'}
        style={{
          display: 'flex',
          minHeight: '100%'
        }}

      >
        <Space direction="vertical"
               size={'middle'}
               style={{ display: 'flex' }}>
          <Card>
            <Meta title={title}
                  description={description}/>
            <Button type="dashed"
                    style={{ width: '100%' }}
                    {...listeners}
            >
              Drag Handle
            </Button>
          </Card>
        </Space>
        <AddItemButton onClick={onAddItem}>
          Add Item
        </AddItemButton>
        {children}
      </Space>
    </ColumnContainer>
  );
};
export default KanbanColumn;
