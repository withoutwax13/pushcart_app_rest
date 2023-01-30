import express from 'express'
import { getCategories } from './services/categories.js'
import { getUser, getUserByEmail, getUsers } from './services/users.js'
// import bcrypt from 'bcrypt'

const app = express()
const PORT = 8080

app.use(express.json())


// for hashing password of users
// const saltRounds = 10
// const password = "Admin@123"

// bcrypt.genSalt(saltRounds)
//     .then(salt=>{
//         console.log('SALT: ', salt)
//         return bcrypt.hash(password, salt)
//     })
//     .then(hash=>console.log("Hash: ", hash))
//     .catch(err=>console.log(err))

app
    // categories-related API
    .get('/categories', async(req, res)=>{
        res.send(await getCategories())
        res.end()
    })

    // user-related API
    .get('/users', async(req, res)=>{
        res.send(await getUsers())
        res.end()
    })
    .get('/user/:id', async(req, res)=>{
        res.send(await getUser(req.params.id))
        res.end()
    })
    .get('/user/byemail/:email', async(req, res)=>{
        res.send(await getUserByEmail(req.params.id))
        res.end()
    })

app.listen(PORT, ()=>{
    console.log(`SERVER RUNNING AT PORT ${PORT}`)
})