import axios from "axios";

class HttpConnection {
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:9000/api/v1",
      headers: {
        "Content-Type": "application/json",
        "X-API-DST": "S&P-CHALLENGE",
      },
      withCredentials: false,
    });
  }

  get connection() {
    return this.instance;
  }
}

export default new HttpConnection();
