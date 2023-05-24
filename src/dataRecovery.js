import {pokemonKantoList} from './assets/data/pokemon/kantoList';
import {placeKantoList} from './assets/data/place/kantoList';
import {saveEstructure} from './assets/data/save';

// função para recuperar um Pokémon
export function getPokemon(number)
{
    let numberArray = number.split('.');
    switch(numberArray[0])
    {
        case '1':
            return pokemonKantoList[(numberArray[1] - 1)];
    }
}

// função para recuperar um Local
export function getLocation(number)
{
    let numberArray = number.split('.');
    switch(numberArray[0])
    {
        case '1':
            return placeKantoList[(numberArray[1] - 1)];
    }
}

// função para recuperar o save padrão sem nenhum dado
export function getSaveDefault()
{
    return saveEstructure;
}

// função para comprimir o save para importação
export function compressSave(perspective, berries, pokedexList)
{
    let saveJson = saveEstructure;
    saveJson.perspective = perspective;
    saveJson.berries = berries;
    saveJson.pokedexList = pokedexList;
    return compress(JSON.stringify(saveJson));
}

// função para descomprimir o save advindo da exportação
export function decompressSave(saveString)
{
    return decompress(JSON.parse(saveString));
}

// função interna para comprimir string
function compress(s)
{
    if (!s)
    {
        return s;
    }
    let dict = new Map();
    let data = (s + "").split("");
    let out = [];
    let currChar;
    let phrase = data[0];
    let code = 256;
    for (let i = 1; i < data.length; i++)
    {
        currChar = data[i];
        if (dict.has(phrase + currChar))
        {
            phrase += currChar;
        }
        else
        {
            out.push (phrase.length > 1 ? dict.get(phrase) : phrase.codePointAt(0));
            dict.set(phrase + currChar, code);
            code++;
            if (code === 0xd800)
            {
                code = 0xe000;
            }
            phrase = currChar;
        }
    }
    out.push(phrase.length > 1 ? dict.get(phrase) : phrase.codePointAt(0));
    for (let i = 0; i < out.length; i++)
    {
        out[i] = String.fromCodePoint(out[i]);
    }
    return out.join("");
}

// função interna para descomprimir string
function decompress(s)
{
    let dict = new Map();
    let data = Array.from(s + "");
    let currChar = data[0];
    let oldPhrase = currChar;
    let out = [currChar];
    let code = 256;
    let phrase;
    for (let i = 1; i < data.length; i++)
    {
        let currCode = data[i].codePointAt(0);
        if (currCode < 256)
        {
            phrase = data[i];
        }
        else
        {
            phrase = dict.has(currCode) ? dict.get(currCode) : (oldPhrase + currChar);
        }
        out.push(phrase);
        let cp = phrase.codePointAt(0);
        currChar = String.fromCodePoint(cp);
        dict.set(code, oldPhrase + currChar);
        code++;
        if (code === 0xd800)
        {
            code = 0xe000;
        }
        oldPhrase = phrase;
    }
    return out.join("");
}