// const env = require('dotenv').config()

const envDev = {
    DB: {
        HOST_DB: process.env.HOST_DB || '35.247.229.69',
        USER_DB: process.env.USER_DB || 'db_user',
        PASSWORD_DB: process.env.PASSWORD_DB || "TAM*ZD^u{,'?O9}5",
        NAME_DB: process.env.NAME_DB || 'testmessaging-3153e:southamerica-east1:app',
        DRIVE_DB: process.env.DRIVE_DB || 'postgres',
    },
    APP: {
        PORT: process.env.PORT || '3000'
    }

}

module.exports = { envDev }