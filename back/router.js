
import express from 'express'
import pokemons from './routes/PokemonRoutes.js'
import hello from './routes/HelloRoutes.js'

const router = express.Router()

router.use('/', hello)
router.use('/pokemons', pokemons)

export default router
