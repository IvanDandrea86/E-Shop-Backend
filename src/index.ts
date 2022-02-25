import "reflect-metadata"
import express from "express"
import { loadMikroORM } from "./config/mikrORM"
import { port } from "./const"


const lunchServer=async()=>{
    await loadMikroORM()
    const app=express()
    app.listen(port,()=>{
        console.log("server listen at port",port)
    })
}

lunchServer().catch((err)=>{
    console.error(err)
})