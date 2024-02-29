import { FC, JSX, ReactNode } from 'react';
import Title from 'antd/lib/typography/Title';
import styles from './HomeTitle.module.scss'

interface IHomeTitleProps {
  title: ReactNode;
}

const HomeTitle: FC<IHomeTitleProps> = ({ title }): JSX.Element => {
  return (
    <div className={styles.HomeTitle}>
      <Title>
        {title}
      </Title>
    </div>
  );
};
export default HomeTitle;
