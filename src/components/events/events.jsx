import React, {useState} from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Calendar } from 'antd';
import './events.css';
import { Card } from 'antd';
import { Button } from 'antd';
import { Modal } from 'antd';
import EventForm from "../event-form";

const Events = () => {
  function onPanelChange(value, mode) {
    console.log(value, mode);
  }

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Row justify="space-between" align="middle" className='h100'>
        <Col span={12} className='item'>
          <div className="site-calendar-demo-card">
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
          </div>
          <div className='card-button'>
            <Button
              className='add-button'
              type="primary"
              onClick={() => setModalVisible(true)}
            >Добавить событие</Button>
          </div>
        </Col>
        <Col span={12} className='item'>
          <div className="site-card-border-less-wrapper card-item">
            <Card title="День рождения собаки" bordered={true}  className='card-head'>
              <p className='card-content'>Бюджет: 100р</p>
            </Card>
          </div>
          <div className="site-card-border-less-wrapper card-item">
            <Card title="Пьянка у соседа" bordered={true} className='card-head'>
              <p className='card-content'>Адрес: Луговая 7</p>
              <p className='card-content'>Время: 13:48</p>
            </Card>
          </div>
          <div className="site-card-border-less-wrapper card-item">
            <Card title="Заметочка" bordered={true} className='card-head'>
              <p className='card-content'>купить хлеб на бутеры</p>
            </Card>
          </div>
        </Col>
      </Row >
      <Modal
        title='Добавить событие'
        visible={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
        <EventForm/>
      </Modal>
    </>
  );
};

export default Events;