function axiosGet(url) {
    // create a promise for the axios request
    const promise = axios.get(url);

    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response.data);

    // return it
    return dataPromise;
}
function axiosPost(url, formObj) {
    // create a promise for the axios request
    const promise = axios.post(url, formObj);

    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response.data);

    // return it
    return dataPromise;
}