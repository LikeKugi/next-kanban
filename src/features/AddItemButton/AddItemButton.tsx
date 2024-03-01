import { FC, JSX } from 'react';
import { ButtonProps } from 'antd/es/button/button';
import { Button, ConfigProvider } from 'antd';
import { clsx } from 'clsx';
import { addItemButtonTheme } from '@/features/AddItemButton/AddItemButton.theme';

const AddItemButton: FC<ButtonProps> = ({ children, className, ...other }): JSX.Element => {
  return (
    <ConfigProvider theme={addItemButtonTheme}>
      <Button type="default"
              className={clsx(className)} {...other} style={{width: '100%'}}>
        Add Item
      </Button>
    </ConfigProvider>
  );
};
export default AddItemButton;
