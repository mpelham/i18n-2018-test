import querystring from 'querystring';

function locLoader(language, pathToJSON) {
    return import(`../${language}/${pathToJSON}`).then((resp) => {
        console.log('sup', resp);
        if (document) {
            document.getElementById('root').innerHTML = JSON.stringify(resp.default);
        }
    });
}

const isClient = typeof window !== 'undefined';
const qsObj = isClient ? querystring.parse(window.location.search.substring(1)) : {};
const lang = qsObj.lang || 'fr';

const loc = locLoader(lang, 'Common.en.json');
console.log(loc);
