import { pool } from "../database.js";

export async function getCategories(){
    const [categories] = await pool.query("SELECT * FROM categories")
    return {
        total: categories.length,
        data: categories
    }
}