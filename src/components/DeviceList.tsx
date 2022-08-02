import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { Row } from "react-bootstrap"
import { Context } from "../index"
import DeviceItem from "./DeviceItem"

const DeviceList = observer(() => {
    const {device} = useContext(Context)

    return (
        <Row className="d-flex">
            {device.devices.map(deviceItem =>
                <DeviceItem key={deviceItem.id}
                id={deviceItem.id}
                name={deviceItem.name}
                price={deviceItem.price}
                rating={deviceItem.rating}
                img={deviceItem.img}/>    
            )}
        </Row>
    )
})

export default DeviceList