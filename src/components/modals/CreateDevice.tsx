import { useContext, useState } from 'react';
import { Dropdown, Form, Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../../index';

type Props = {
    show: boolean
    onHide: () => void
}

type InfoItem = {
    title: string
    description: string
    id: number
}

const CreateDevice = ({show, onHide}: Props) => {
    const device = useContext(Context)
    const [info, setInfo] = useState<InfoItem[]>([])
  
    const addInfo = () => {
        setInfo([...info, {title: '', description: '', id: Date.now()}])
    }

    const removeInfo = (id: number) => {
        setInfo(info.filter(infoItem => 
            infoItem.id !== id    
        ))
    }

    return (
    <Modal
        show={show}
        size="lg"
        centered
    >
        <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
                Добавить тип 
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Container className='d-flex justify-content-around'>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.device.types.map(type =>
                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>Выберите брэнд</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.device.brands.map(brand =>
                                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
                
                <Form.Control
                    className="mt-3"
                    placeholder='Введите название устройства'
                />
                <Form.Control
                    className="mt-3"
                    placeholder='Введите стоимость устройства'
                    type='number'
                />
                <Form.Control
                    className="mt-3"
                    type='file'
                />
                <hr/>
                <Button
                    variant='outline-primary'
                    onClick={addInfo}
                >
                    Добавить новое свойство
                </Button>
                {
                    info.map(infoItem =>
                        <Row className="mt-4" key={infoItem.id}>
                            <Col md={4}>
                                <Form.Control
                                    placeholder="Введите название свойства"
                                />
                            </Col>
                            <Col md={4}>
                            <Form.Control
                                    placeholder="Введите описание свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Button onClick={() => removeInfo(infoItem.id)} variant="outline-danger">
                                    Удалить
                                </Button>
                            </Col>
                        </Row>    
                    )
                }
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant='outline-danger' onClick={onHide}>Отменить</Button>
            <Button variant='outline-success' onClick={onHide}>Добавить</Button>
        </Modal.Footer>
    </Modal>
  );
}

export default CreateDevice