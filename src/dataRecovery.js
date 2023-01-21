import {kantoList} from './assets/data/kantoList';

export function getPokemon(number)
{
    var numberArray = number.split('.');
    switch(numberArray[0])
    {
        case '1':
            return kantoList[(numberArray[1] - 1)];
    }
}