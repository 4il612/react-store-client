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
    brand: string
}

const DeviceItem = ({id=0, name, price=0, rating=0, img='', brand='undifned'}: Device) => {
    const navigate = useNavigate()

    return (
        <Col md={2} className="mt-1 mb-2">
            <Card
                style={{
                    width: 150,
                    height: 240,
                    cursor: 'pointer'
                }}
                onClick={() => navigate(DEVICE_ROUTE + '/' + id)}
                className="p-2"
            >
                <Image width={140} height={140} src={process.env.REACT_APP_API_URL + img}/>
                <div className="text-black-50 mt-2 d-flex justify-content-between align-items-center">
                    <div>{brand}</div>
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