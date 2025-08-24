import express from 'express'
import { GetSingelpost } from '../controllers/public.controller.js'

const PublicRoutes=express.Router()

PublicRoutes.get('/singlepost/:id',GetSingelpost)
export default PublicRoutes