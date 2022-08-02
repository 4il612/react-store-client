import { Col, Container, Row } from "react-bootstrap"
import TypeBar from "../components/TypeBar"
import BrandBar from "../components/BrandBar"
import DeviceList from "../components/DeviceList"

const Shop = () => {
    return (
        <Container>
            <Row className="mt-2">
                <Col md={2}>
                    <TypeBar/>
                </Col>
                <Col md={10}>
                    <BrandBar/>
                    <DeviceList/>
                </Col>
            </Row>
        </Container>
    )
}

export default Shop