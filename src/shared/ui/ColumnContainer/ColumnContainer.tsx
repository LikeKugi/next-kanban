import { DetailedHTMLProps, FC, forwardRef, HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import styles from './ColumnContainer.module.scss'

const ColumnContainer: FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = forwardRef(function columnContainer({
                                                                                                                                     children,
                                                                                                                                     className,
                                                                                                                                     ...other
                                                                                                                                   }, ref) {
  return (
    <div className={clsx(className, styles.ColumnContainer)} {...other} ref={ref}>
      {children}
    </div>
  );
});
export default ColumnContainer;
