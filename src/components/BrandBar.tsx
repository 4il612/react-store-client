import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { Card, Col} from "react-bootstrap"
import { Context } from "../index"

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return(
        <Col className="d-flex flex-wrap justify-content-center">
            {device.brands.map(brand =>
                <Card
                    style={{cursor: "pointer"}}
                    border={brand.id === device.selectedBrand.id ? 'primary' : 'light'}
                    onClick={() => device.setSelectedBrand(brand)} 
                    key={brand.id}
                    className="p-3"
                >
                    {brand.name}
                </Card>
            )}
        </Col>
    )
})

export default BrandBar