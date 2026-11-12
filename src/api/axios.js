import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "fad29586376b4cca76e64468f8a76f13",
    language: "ko-KR"
  }
})

export default instance;