import { Card, Col, Image } from "react-bootstrap"
import like from '../assets/like.png'
import {useNavigate} from 'react-router-dom'
import { DEVICE_ROUTE } from "../utils/consts"

type Device = {
    id: number
    name: string
    price: number
    rating: number
    img: string
}

const DeviceItem = ({id=0, name, price=0, rating=0, img=''}: Device) => {
    const navigate = useNavigate()

    return (
        <Col md={3} className="mt-1 mb-2" onClick={() => navigate(DEVICE_ROUTE + '/' + id)}>
            <Card
                style={{
                    width: 150,
                    cursor: 'pointer'
                }}
                className="p-2"
            >
                <Image width={140} height={140} src={img}/>
                <div className="text-black-50 mt-2 d-flex justify-content-between align-items-center">
                    <div>Apple</div>
                    <div className="d-flex align-items-center">
                        <div>{rating}</div>
                        <Image width={16} height={16} src={like}/>
                    </div>
                </div>
                <div>{name}</div>
            </Card>
        </Col>
    )
}

export default DeviceItem