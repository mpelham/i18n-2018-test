import Foo from './Foo/Foo.en.json';
import querystring from 'querystring';

function locLoader(language, pathToJSON) {
    return import(`../${language}/${pathToJSON}`);
}

const isClient = typeof window !== 'undefined';
const qsObj = isClient ? querystring.parse(window.location.search.substring(1)) : {};
const lang = qsObj.lang || 'fr';

const loc = locLoader(lang, 'src/Foo/Foo.en.json');
console.log(loc);
