import MainContainer from "../containers/MainContainer";
import ShopItemList from "../components/ShopItemList";
import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import {mount, configure} from 'enzyme';

configure({ adapter: new Adapter()});

describe("MainContainer", () => {


    let container;

    beforeEach(() => {
        container = mount(<ShopItemList/>)
    });

    it("should display a list header", () => {
        const listHeader = container.find("#list-header")
        expect("this").toEqual('this')
    })
})