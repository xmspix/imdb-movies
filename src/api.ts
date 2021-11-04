import axios from "axios";

type ApiClient = {
    featuredMovies: () => Promise<any>;
    topMovies: () => Promise<any>;
    trailer: (id: string) => Promise<any>;
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
    }
}