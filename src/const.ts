import dotenv from "dotenv"
import path from "path"
// Loads the right .env config file

if (process.env.NODE_ENV == 'production') {
    dotenv.config({
      path: path.join(__dirname, `../.env`),
    })
  } else {
    dotenv.config({
      path: path.join(__dirname, `../.env.${process.env.NODE_ENV}`),
    })
  }
export const __prod__ = process.env.NODE_ENV ==="production"
export const port = process.env.PORT ? process.env.PORT : 3000
export const MIKRO_ORM_DB_NAME = process.env.MIKRO_ORM_DB_NAME
export const MIKRO_ORM_PASSWORD =process.env.MIKRO_ORM_PASSWORD
export const MIKRO_ORM_USER= process.env.MIKRO_ORM_USER
export const MIKRO_ORM_HOST=process.env.MIKRO_ORM_HOST
export const MIKRO_ORM_PORT	=process.env.MIKRO_ORM_PORT	