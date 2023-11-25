const express = require("express");
const cors = require("cors")

const routerApi = require("./routers/");
const { logError, errorHandler, boomErrorHandler } = require("./midlewares/errorHandler")

const app = express();
const port = process.env.PORT || 3000;


const whiteList = ['http://localhost:2000', 'htttps://myapp.com']
const option = {
  origin: (origin, callback) => {
    if ( whiteList.includes(origin)) {
      callback(null, true)
    } else {
      callback( new Error("Acceso no permitido"))
    }
  }
}

//Midlewares
app.use(cors())
app.use(express.json());
routerApi(app);

app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log(`El puerto corre en ${port}`)
})
