import { FC, JSX } from 'react';
import Title from 'antd/lib/typography/Title';
import { Button, Input, Modal, Typography } from 'antd';

interface IAddColumnModalProps {
  closeModal: () => void;
  createModal: () => void;
  isShown: boolean;
  containerName: string;
  setContainerName: (arg: string) => void;
}

const AddColumnModal: FC<IAddColumnModalProps> = ({closeModal, createModal, isShown, containerName, setContainerName}): JSX.Element => {
  return (
    <Modal onCancel={closeModal}
           onOk={createModal}
           open={isShown}
           closeIcon={null}
           title={<Title style={{textAlign: 'center'}}>Add Container</Title>}
           footer={[
             <div key={'div'} style={{display: 'flex', gap: 10}}>
               <Button key={'save'}
                       type="primary" onClick={createModal}>
                 Save
               </Button>
               <Button key={'cancel'}
                       type="default"
                       style={{ alignSelf: 'self-start' }} onClick={closeModal}>
                 Cancel
               </Button>
               <Button key={'delete'}
                       type="default"
                       danger
                       style={{ marginInlineStart: 'auto' }} onClick={closeModal}>
                 Delete
               </Button>
             </div>
           ]}>
      <Typography>
        Column Title
      </Typography>
      <Input name={'containerName'} value={containerName} onChange={e => setContainerName(e.target.value)} />
    </Modal>
  );
};
export default AddColumnModal;
