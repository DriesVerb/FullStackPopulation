import dotenv from 'dotenv'

dotenv.config()
export const frontendPort = process.env.FRONTEND_PORT || ''

export const dbUser = process.env.DB_USER || ''
export const dbPassword = process.env.DB_PASSWORD || ''
export const dbCluster = process.env.DB_CLUSTER || ''
