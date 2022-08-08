import { Col, Container, Row } from "react-bootstrap"
import TypeBar from "../components/TypeBar"
import BrandBar from "../components/BrandBar"
import DeviceList from "../components/DeviceList"
import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from "react";
import { Context } from "../index";
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceAPI";

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes()
        .then(data => device.setTypes(data))
        fetchBrands()
        .then(data => device.setBrands(data))
        fetchDevices()
        .then(data => device.setDevices(data.rows))
        .catch(() => {alert('no server connection')})
    }, [])

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
})

export default Shop