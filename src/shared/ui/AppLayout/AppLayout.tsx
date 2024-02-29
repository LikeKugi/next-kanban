import { FC, JSX, PropsWithChildren } from 'react';
import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import styles from './AppLayout.module.scss'

const AppLayout: FC<PropsWithChildren> = ({children}): JSX.Element => {
  return (
    <Layout className={styles.AppLayout} style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Header>
        Header
      </Header>
      <Content className={styles.AppLayout__content} style={{flexGrow: 1}}>
        {children}
      </Content>
      <Footer>
        Footer
      </Footer>
    </Layout>
  );
};
export default AppLayout;
