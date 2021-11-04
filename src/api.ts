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
                .get(`http://mark-stoler.ddnsfree.com/imdb/featured-movies`)
                .then((res: any) => res.data)
                .catch((err: any) => err),
        topMovies: () =>
            axios
                .get(`http://mark-stoler.ddnsfree.com/imdb/top-movies`)
                .then((res: any) => res.data)
                .catch((err: any) => err),
        trailer: (id: string) =>
            axios
                .get(`http://mark-stoler.ddnsfree.com/imdb/trailer/${id}`)
                .then((res: any) => res.data)
                .catch((err: any) => err),
        search: (term: string) =>
            axios.get(`http://mark-stoler.ddnsfree.com/imdb/search/${term}`)
                .then((res: any) => res.data)
                .catch((err: any) => err),
        movieInfo: (id: string) =>
        axios.get(`http://mark-stoler.ddnsfree.com/imdb/movie/${id}`)
            .then((res: any) => res.data)
            .catch((err: any) => err)
    }
}