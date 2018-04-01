import React from "react";
import { createStore } from "../../../AppData/Local/Microsoft/TypeScript/2.7/node_modules/redux";

export default class Root extends React.Component{
    renderApp(){
            const initialState = window.__INTITIAL_STATE__;
            const store = createStore(initialState);
            return {
       };
   }
   render(){
       return this.renderApp();
   }
}
