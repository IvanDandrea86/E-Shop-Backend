import "reflect-metadata"
import express from "express"


const lunchServer=async()=>{


    const app=express()
    app.listen(3000)
}

lunchServer().catch((err)=>{
    console.error(err)
})