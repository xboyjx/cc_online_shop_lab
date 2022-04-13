import React, {useState, useEffect} from "react";
import ShopItemList from "../components/ShopItemList";
import BasketList from "../components/BasketList";
import UserContext from "../context/UserContext";

const MainContainer = () => {

    const[user, setUser] = useState({
        name: "John Doe",
        basketItems:[
            {"Pasta": 2}
        ]
    })

    return (
        <div>
            <UserContext.Provider value={{user, setUser}}>
                <BasketList />
                <ShopItemList />
            </UserContext.Provider>
        </div>
    )


}

export default MainContainer