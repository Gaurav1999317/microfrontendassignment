import { Outlet } from "react-router-dom"
import Header from "./Header"
import React from "react"
const Body=()=>{
    return (
        <>
        <Header/>
        <Outlet/>
        </>
    )
}
export default Body