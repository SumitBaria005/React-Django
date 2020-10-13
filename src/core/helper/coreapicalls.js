import {API} from '../../backend';

export const getProducts = () => {
    return fetch(`${API}product/`, {method: 'POST'})
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}