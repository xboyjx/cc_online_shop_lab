import React, {useState, useEffect} from "react";
import ShopItemList from "../components/ShopItemList";
import BasketList from "../components/BasketList";
import UserContext from "../context/UserContext";

const MainContainer = () => {

    const[user, setUser] = useState({
        name: "John Doe",
        basketItems:[
            {name: "Pasta", price: 2},
            {name: "apple", price:2}
        ]
    })

    const[items, setItems] = useState([
        {name :"apples", price: 1},
        {name: "oranges" , price: 3},
        {name: "Bread", price: 2},
        {name: "prawns", price: 5}
    ])

    const onAddToBasket = function(selectedItem){
        const temp = {...user}
        temp.basketItems.push(selectedItem)
        setUser(temp)
    }

    const removeFromBasket = function(selectedItem){
        const temp = {...user}
        const index = temp.basketItems.indexOf(selectedItem)
        temp.basketItems.splice(index, 1)
        setUser(temp)
    }
    return (
        <div>
            <UserContext.Provider value = {{onAddToBasket, removeFromBasket}}>
                <BasketList user={user} />
                <ShopItemList items={items} />
            </UserContext.Provider>
        </div>
    )


}

export default MainContainer