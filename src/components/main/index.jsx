import React from "react"
import styled from "styled-components"
import Introduction from "../main"
import Header from "../main"
import Footer from "../main"
import PopularItemList from "../main"
import NeighborhoodLife from "../main"
import NeighborhoodStore from "../main"
import SecondHandTransaction from "../main"

const Main = () => {
    return (
        <Wrapper>
            <Header></Header>
            <Introduction></Introduction>
            <SecondHandTransaction></SecondHandTransaction>
            <NeighborhoodLife></NeighborhoodLife>
            <NeighborhoodStore></NeighborhoodStore>
            <PopularItemList></PopularItemList>
            <Footer></Footer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 65px;
`

export default Main