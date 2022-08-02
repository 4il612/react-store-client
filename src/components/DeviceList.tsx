import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { Row } from "react-bootstrap"
import { Context } from "../index"

const DeviceList = observer(() => {
    const {device} = useContext(Context)

    return (
        <Row className="d-flex">
            
        </Row>
    )
})

export default DeviceList