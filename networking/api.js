import axios from "axios";

// 인스턴스를 위한 설정
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "5d5173aff571c3d3f64f94d1b99849e5",
    language: "ko-KR"
  }
});

export const movieApi = {
  nowPlaying: () => api.get("/movie/now_playing"),
  upcoming: () => api.get("/movie/upcoming"),
  topRated: () => api.get("/movie/top_rated"),
  popular: () => api.get("/movie/popular"),
  movieById: id =>
    api.get(`/movie/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("/movie/search", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};

export const tvApi = {
  topRated: () => api.get("/tv/top_rated"),
  popular: () => api.get("/tv/popular"),
  airingToday: () => api.get("/tv/airing_today"),
  tvById: id =>
    api.get(`/tv/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("/tv/search", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};
