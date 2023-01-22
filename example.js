const $urlParams = ({ paramsList, splitparams, paramsNameAppend }) => {
    const params = new URLSearchParams();
    for (const item of paramsList.split(splitparams)) {
        params.append(paramsNameAppend, item);
    }
    return params;
};

const demo = $urlParams({
  splitparams: ' ',
  paramsList: 'a b c',
  paramsNameAppend: 'demo'
})

console.info(demo)