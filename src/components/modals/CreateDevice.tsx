import { ChangeEvent, useContext, useState } from 'react';
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
    const {device} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState<File>()
    const [info, setInfo] = useState<InfoItem[]>([])
  
    const addInfo = () => {
        setInfo([...info, {title: '', description: '', id: Date.now()}])
    }

    const removeInfo = (id: number) => {
        setInfo(info.filter(infoItem => 
            infoItem.id !== id    
        ))
    }

    const selectFile = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files){
            setFile(e.target.files[0])
        }
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
                        <Dropdown.Toggle>{device.selectedType.id === 0 ? "Выберите тип" : device.selectedType.name}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item 
                                    key={type.id} 
                                    onClick={() => device.setSelectedType(type)}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{device.selectedBrand.id === 0 ? "Выберите брэнд" : device.selectedBrand.name}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item 
                                    key={brand.id} 
                                    onClick={() => device.setSelectedBrand(brand)}
                                >
                                    {brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
                
                <Form.Control
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-3"
                    placeholder='Введите название устройства'
                />
                <Form.Control
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="mt-3"
                    placeholder='Введите стоимость устройства'
                    type='number'
                />
                <Form.Control
                    className="mt-3"
                    type='file'
                    onChange={selectFile}
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