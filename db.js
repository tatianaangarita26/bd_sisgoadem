import {createPool} from 'mysql2'

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '00000000',
    port: 3306,
    database: 'sisgoadem'
})