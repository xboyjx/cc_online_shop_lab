import React, {useContext} from "react";
import UserContext from "../context/UserContext";

const BasketItem= ({item}) => {

    const {removeFromBasket} = useContext(UserContext)

    const handleRemoveFromBasket = function(){
        removeFromBasket(item)
        console.log(`${item.name} removed from basket`)
    }

    return (
        <>
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><button onClick={handleRemoveFromBasket}>Remove</button></td>
            </tr>
        </>
    )
}

export default BasketItem