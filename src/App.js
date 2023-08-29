import './App.css';
import React from 'react';
import styled from 'styled-components';
import Introduction from "./components/main"
import Header from "./components/main"
import Footer from "./components/main"
import PopularItemList from "./components/main"
import NeighborhoodLife from "./components/main"
import NeighborhoodStore from "./components/main"
import SecondHandTransaction from "./components/main"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Introduction></Introduction>
      <SecondHandTransaction></SecondHandTransaction>
      <NeighborhoodLife></NeighborhoodLife>
      <NeighborhoodStore></NeighborhoodStore>
      <PopularItemList></PopularItemList>
      <Footer></Footer>
    </div>
  );
}

export default App;
