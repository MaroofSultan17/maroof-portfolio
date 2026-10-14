import { siteData } from "@/data/site";

export class PortfolioService {
  constructor(
    private publicApiBaseUrl: string,
    private token?: string,
  ) {}

  async get(signal?: AbortSignal): Promise<PortfolioGetResponseDTO> {
    if (this.publicApiBaseUrl) {
      const url = new URL(`${this.publicApiBaseUrl}/api/v2/portfolio`);

      return fetch(url.toString(), {
        method: "GET",
        signal,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ...(this.token ? { Authorization: `Bearer ${this.token}` } : {}),
        },
      })
        .then((result) => {
          if (result.ok) {
            return result.json();
          }
          return result.json().then((errorData) => {
            throw new Error(errorData.message || "Failed to fetch portfolio data.");
          });
        })
        .catch((error) => {
          throw new Error(error.message || error);
        });
    }

    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        resolve(siteData);
      }, 1200);

      if (signal) {
        signal.addEventListener("abort", () => {
          clearTimeout(timer);
          reject(new DOMException("Aborted", "AbortError"));
        });
      }
    });
  }

  async post(dto: ContactPostRequestDTO): Promise<ContactPostResponseDTO> {
    if (this.publicApiBaseUrl) {
      const url = new URL(`${this.publicApiBaseUrl}/api/v2/contact/send`);

      return fetch(url.toString(), {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ...(this.token ? { Authorization: `Bearer ${this.token}` } : {}),
        },
        body: JSON.stringify(dto),
      })
        .then((result) => {
          if (result.ok) {
            return result.json();
          }
          return result.json().then((errorData) => {
            throw new Error(errorData.message || "Failed to send message.");
          });
        })
        .catch((error) => {
          throw new Error(error.message || error);
        });
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: "Thank you for reaching out! Your message has been received.",
        });
      }, 500);
    });
  }
}

export const portfolioService = new PortfolioService(
  import.meta.env.VITE_API_BASE_URL || "",
);
