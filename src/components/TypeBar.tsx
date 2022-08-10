import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { ListGroup } from "react-bootstrap"
import { Context } from "../index"

type TypeBrand = {
    id: number
    name: string
}

const defaultTypeBrand: TypeBrand = {id: 0, name: 'all'}

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <ListGroup>
            {device.types.map(type =>
                <ListGroup.Item 
                    style={{cursor: "pointer"}}
                    active={type.id === device.selectedType.id}
                    onClick={() => {
                        if (device.selectedType.id === type.id){
                            device.setSelectedType(defaultTypeBrand)
                        } else{
                            device.setSelectedType(type)
                        }
                    }} 
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    )
})

export default TypeBar