import express from 'express'
import { getPokemons, getPokemon }
from '../controllers/PokemonController.js'

const router = express.Router()

router.get('/', getPokemons)


router.get('/:name', getPokemon)

export default router