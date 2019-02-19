import API_KEY from "./API_KEY";

const BASE_URL = "http://sunset.nada.kth.se:8080/iprog/group/73";
const httpOptions = {
    headers: {
        "X-Mashape-Key": new API_KEY().key
    }
};

class API {

    searchDishes(query,type) {
        console.log(`searching for ${query} with type ${type}`);
        const url = `${BASE_URL}/recipes/search?type=${type}&query=${query}`;
        return fetch(url, httpOptions).then(this.processResponse).then(data=>data.results);
    }

    getRecipe(id) {
        const url = `${BASE_URL}/recipes/${id}/information`;
        return fetch(url, httpOptions).then(this.processResponse);
    }

    processResponse(response) {
        if (response.ok) {
            return response.json();
        }
        throw response;
    }
}

export default API;