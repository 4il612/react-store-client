import { Col, Container, Row } from "react-bootstrap"
import TypeBar from "../components/TypeBar"
import BrandBar from "../components/BrandBar"
import DeviceList from "../components/DeviceList"
import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from "react";
import { Context } from "../index";
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes()
        .then(data => device.setTypes(data))
        .catch(() => {alert('no server connection')})
        fetchBrands()
        .then(data => device.setBrands(data))
        fetchDevices(0, 0, device.page, device.limit)
        .then((data) => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        }
        )
    }, [])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, device.limit)
        .then((data) => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        }
        )
        .catch(() => {alert('no server connection')})
    }, [device.page, device.selectedType, device.selectedBrand])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={2}>
                    <TypeBar/>
                </Col>
                <Col md={10}>
                    <BrandBar/>
                    <DeviceList/>
                    {!!device.devices.length && <Pages/>}
                </Col>
            </Row>
        </Container>
    )
})

export default Shop