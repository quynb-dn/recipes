import { trimEnd, trimStart } from "lodash";

class ApiService {
  private basePath = trimEnd(process.env.NEXT_PUBLIC_API_URL, "/");

  url(path: string): string {
    return `${this.basePath}/${trimStart(path, "/")}`;
  }

  get(path: string) {
    const url = this.url(path);
    return fetch(url);
  }
}

const singleton = new ApiService();
export { singleton as ApiService };
