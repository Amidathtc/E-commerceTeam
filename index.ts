import express, { Application } from "express"

const port : number = parseInt(process.env.PORT! )
const app:Application = express()


const server = app.listen(process.env.PORT || port, () => {
   console.log();
   console.log("server is active🚀🚀 ...");
})

process.on("uncaughtException", (error: Error) => {
    console.log("Error due to uncaughtException");
    console.log(error);

    process.exit(-1)
})

process.on("unhandledRejection", (reason: any) => {
    console.log("Error due to unhandled");
 console.log(reason);

 server.close(() => {
    process.exit(1)
 })
     
})