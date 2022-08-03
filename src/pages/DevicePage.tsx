import { Col, Container, Image, Row, Card, Button } from "react-bootstrap"
import like from '../assets/like.png'

type Device = {
    id: number
    name: string
    price: number
    rating: number
    img: string
}

type Description = {
    id: number
    title: string
    description: string
}

const DevicePage = () => {
    const device: Device = {id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: "https://the-istore.ru/upload/iblock/7cc/7cc9085373c58a4b89ff51977843aba2.jpg"}
    const description: Description[] = [
        {
            id: 1, title: 'Оперативная память', description: '5 ГБ'
        },
        {
            id: 2, title: 'Камера', description: '12 МП'
        },
        {
            id: 3, title: 'Аккумулятор', description: '4000 мА/ч'
        }
    ]

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
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
                {description.map((info, index) => 
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