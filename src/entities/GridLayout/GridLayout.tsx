import { JSX } from 'react';
import { Col, Row } from 'antd';

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

const GridLayout = (): JSX.Element => {
  return (

    <div style={{padding: '0 1rem'}}>
      <Row gutter={{ xs: 12, sm: 18, md: 24, lg: 32 }}>
      <Col className="gutter-row"
           span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row"
           span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row"
           span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row"
           span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
    </div>

  );
};
export default GridLayout;
