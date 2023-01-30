import { pool } from '../database.js'

export async function getUsers(){
    const [users] = await pool.query("SELECT * FROM users")
    return {
        total: users.length,
        data: users
    }
}

export async function getUser(id){
    const [result] = await pool.query("SELECT * FROM users WHERE user_id = ?", [id])
    return {
        length: result[0] === undefined ? 0 : 1,
        data: result[0]
    }
}

export async function getUserByEmail(email){
    const [result] = await pool.query("SELECT * FROM users WHERE email = ?", [email])
    return {
        length: result[0] === undefined ? 0 : 1,
        data: result[0]
    }
}

console.log(await getUsers())