import { FC, ForwardedRef, forwardRef } from 'react';
import { Button, ConfigProvider } from 'antd';
import { ButtonProps } from 'antd/es/button/button';
import { clsx } from 'clsx';
import { addColumnButtonTheme } from '@/features/AddColumnButton/AddColumnButton.theme';

const AddColumnButton: FC<ButtonProps> = forwardRef(function button({className, ...other}, ref: ForwardedRef<HTMLButtonElement>) {
  return (
    <ConfigProvider theme={addColumnButtonTheme}>
      <Button type="default" ref={ref} style={{width: 240, height: 240}} className={clsx(className)} {...other}>
        Add Column
      </Button>
    </ConfigProvider>
  );
});


export default AddColumnButton;
