import React, {useState} from 'react';
import {Button, Form, Input} from 'antd';
import { DatePicker, Row } from 'antd';
import { Select } from 'antd';

const EventForm = () => {

  const [event, setEvent] = useState({
    date:'',
    description: '',
  });

  const  formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() <= 10 ? `${date.getMonth() + 1}` : date.getMonth() + 1
    const day = date.getDate() <= 10 ? `0${date.getDate()}` : date.getDate()
    return `${year}.${month}.${day}`
  }

  const selectDate = (date) => {
    if (date) {
      console.log(formatDate(date.toDate()))
      setEvent({...event, date: formatDate(date.toDate())})
    }
  }

  const submitForm = () => {
    console.log(event)
  }


  return (
    <Form onFinish={submitForm}>
      <Form.Item
        label='Название события'
        name='description'
      >
        <Input
          onChange={event => setEvent({...event, description: event.target.value})}
          value={event.description}/>
      </Form.Item>

      <Form.Item label='Дата события'
                 name='date'>
        <DatePicker
          placeholder=''
          onChange={(date) => selectDate(date)}
        />
      </Form.Item>

      <Form.Item label='Тип события'
                 name='type'>
        <Select >
          <Select.Option value="Праздничный день">Праздничный день</Select.Option>
          <Select.Option value="Мероприятия">Мероприятия</Select.Option>
          <Select.Option value="Заметки">Заметки</Select.Option>
        </Select>
      </Form.Item>
      <Row justify='end'>
        <Form.Item>
          <Button type='primary' htmlType="submit">
            Добавить
          </Button>
        </Form.Item>
      </Row>

    </Form>
  );
};

export default EventForm;