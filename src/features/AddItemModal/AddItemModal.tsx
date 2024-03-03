import { FC, JSX } from 'react';
import { Button, Input, Modal, Typography } from 'antd';
import Title from 'antd/lib/typography/Title';

interface IAddItemModalProps {
  isShown: boolean;
  closeModal: () => void;
  itemName: string;
  setItemName: (arg: string) => void;
  onAddItem: () => void;
}

const AddItemModal: FC<IAddItemModalProps> = ({
                                                isShown,
                                                closeModal,
                                                itemName,
                                                setItemName,
                                                onAddItem
                                              }): JSX.Element => {
  return (
    <Modal open={isShown}
           onCancel={closeModal}
           closeIcon={null}
           title={<Title style={{ textAlign: 'center' }}>Add Item</Title>}
           footer={[
             <div style={{ display: 'flex', gap: 24 }}
                  key={'actions'}>
               <Button type="default"
                       onClick={closeModal}
                       style={{ flexGrow: 1 }}>
                 Cancel
               </Button>
               <Button type="primary"
                       onClick={onAddItem}
                       style={{ flexGrow: 1 }}>
                 Save
               </Button>
             </div>
           ]}>
      <Typography>
        Item Name
      </Typography>
      <Input autoFocus value={itemName}
             onChange={e => setItemName(e.target.value)}></Input>
    </Modal>
  );
};
export default AddItemModal;
