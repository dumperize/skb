const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';


export default (async function () {
    try {
        const response = await fetch(pcUrl, {'mode': 'no-cors'});
        const pc = await response.json();
        return pc;
    } catch (e) {
        console.log(e);
    }
})();
