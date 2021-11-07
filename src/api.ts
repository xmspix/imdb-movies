import axios from "axios";

type ApiClient = {
    featuredMovies: () => Promise<any>;
    topMovies: () => Promise<any>;
    trailer: (id: string) => Promise<any>;
    search: (term: string) => Promise<any>;
    movieInfo: (id: string) => Promise<any>;
}

export const createApiClient = (): ApiClient => {
    return {
        featuredMovies: () =>
            axios
                .get(`https://stoler-imdb-api.herokuapp.com/featured-movies`)
                .then((res: any) => res.data)
                .catch((err: any) => err),
        topMovies: () =>
            axios
                .get(`https://stoler-imdb-api.herokuapp.com/top-movies`)
                .then((res: any) => res.data)
                .catch((err: any) => err),
        trailer: (id: string) =>
            axios
                .get(`https://stoler-imdb-api.herokuapp.com/trailer/${id}`)
                .then((res: any) => res.data)
                .catch((err: any) => err),
        search: (term: string) =>
            axios.get(`https://stoler-imdb-api.herokuapp.com/search/${term}`)
                .then((res: any) => res.data)
                .catch((err: any) => err),
        movieInfo: (id: string) =>
        axios.get(`https://stoler-imdb-api.herokuapp.com/movie/${id}`)
            .then((res: any) => res.data)
            .catch((err: any) => err)
    }
}