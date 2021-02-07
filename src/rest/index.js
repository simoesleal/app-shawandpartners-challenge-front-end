import axios from "axios";

class HttpConnection {
  constructor() {
    this.instance = axios.create({
      baseURL: "https://mysterious-anchorage-18483.herokuapp.com/api/v1",
      headers: {
        "Content-Type": "application/json",
        "X-API-DST": "S&P-CHALLENGE"
      },
      withCredentials: false
    });
  }

  get connection() {
    return this.instance;
  }
}

export default new HttpConnection();
