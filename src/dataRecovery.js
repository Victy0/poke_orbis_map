import {pokemonKantoList} from './assets/data/pokemon/kantoList';

import {placeKantoList} from './assets/data/place/kantoList';

export function getPokemon(number)
{
    var numberArray = number.split('.');
    switch(numberArray[0])
    {
        case '1':
            return pokemonKantoList[(numberArray[1] - 1)];
    }
}

export function getLocation(number)
{
    var numberArray = number.split('.');
    switch(numberArray[0])
    {
        case '1':
            return placeKantoList[(numberArray[1] - 1)];
    }
}