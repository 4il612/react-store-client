import { useEffect, useState } from "react"
import { Col, Container, Image, Row, Card, Button } from "react-bootstrap"
import like from '../assets/like.png'
import { useParams } from "react-router-dom"
import { fetchOneDevice } from "../http/deviceAPI"

type Device = {
    id: number
    name: string
    price: number
    rating: number
    img: string
    info: Description[]
}

type Description = {
    id: number
    title: string
    description: string
}

const DevicePage = () => {
    const [device, setDevice] = useState<Device>({id: 0, name: '', price: 0, rating: 0, img: 'asa', info: []})
    const {id} = useParams()

    useEffect(() => {
        fetchOneDevice(Number(id))
        .then(data => setDevice(data))
    }, [])

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col className="d-flex flex-column align-items-center" md={4}>
                    <h2>{device.name}</h2>
                    <div 
                        className="d-flex align-items-center justify-content-center"
                        style={{
                            background: `url(${like}) no-repeat center center`, 
                            width: 180, 
                            height: 180,
                            backgroundSize: 'cover',
                            fontSize: 48
                        }}
                    >
                        {device.rating}
                    </div>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{
                            width: 300,
                            height: 150,
                            fontSize: 32,
                            border: '5px solid lightgray'
                        }}
                    >
                        <h3>От {device.price} руб.</h3>
                        <Button
                            variant={"outline-dark"}
                        >
                            Добавить в корзину
                        </Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {device.info.map((info, index) => 
                    <Row 
                        key={info.id}
                        style={{
                            background: index%2 === 0 ? 'lightgray' : 'transparent',
                            padding: 10
                        }}
                    >
                        {info.title}: {info.description}
                    </Row>    
                )}
            </Row>
        </Container>
    )
}

export default DevicePage