import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { Card, Col} from "react-bootstrap"
import { Context } from "../index"

type TypeBrand = {
    id: number
    name: string
}

const defaultTypeBrand: TypeBrand = {id: 0, name: 'all'}

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return(
        <Col className="d-flex flex-wrap justify-content-center">
            {device.brands.map(brand =>
                <Card
                    style={{cursor: "pointer"}}
                    border={brand.id === device.selectedBrand.id ? 'primary' : 'light'}
                    onClick={() => {
                        if (device.selectedBrand.id === brand.id){
                            device.setSelectedBrand(defaultTypeBrand)
                        } else{
                            device.setSelectedBrand(brand)
                        }
                    }} 
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