import { get, timeout } from '../util';
import type { Move, MoveEntry, Pokemon, Species } from './pokemon-api';

export const getPokemon = (name: string): Promise<Pokemon> =>
    new Promise<Pokemon>(async (resolve, reject) => {
        try {
            // just for show
            await timeout(500);
            resolve(get(`https://pokeapi.co/api/v2/pokemon/${name}`) as Promise<Pokemon>);
        } catch (error) {
            return reject(error);
        }
    });
export const getSpecies = (id: number): Promise<Species> => get(`https://pokeapi.co/api/v2/pokemon-species/${id}`) as Promise<Species>;
export const getPokemonMoves = (pokemon: Pokemon): MoveEntry[] => {
    return pokemon.moves
        .filter((move) => move.version_group_details[0].level_learned_at === 1)
        .slice(0, 2);
};
export const getMove = (name: string): Promise<Move> => get(`https://pokeapi.co/api/v2/move/${name}`) as Promise<Move>;
