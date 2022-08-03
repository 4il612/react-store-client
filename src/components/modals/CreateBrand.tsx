import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

type Props = {
    show: boolean
    onHide: () => void
}

const CreateBrand = ({show, onHide}: Props) => {
  return (
    <Modal
        show={show}
        size="lg"
        centered
    >
        <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
                Добавить брэнд
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control
                    placeholder={"Введите название типа"}
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant='outline-danger' onClick={onHide}>Отменить</Button>
            <Button variant='outline-success' onClick={onHide}>Добавить</Button>
        </Modal.Footer>
    </Modal>
  );
}

export default CreateBrand