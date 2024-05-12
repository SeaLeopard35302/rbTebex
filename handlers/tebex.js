import axios from "axios";

export class Tebex {
  #header;
  constructor(secret) {
    this.#header = { headers: { 'X-Tebex-Secret': secret, } };
  }

  async getInformation() {
    try {
      let response = await axios.get('https://plugin.tebex.io/information', this.#header);
      return response.data;
    } catch (error) { throw error; }
  };

  async getQueue() {
    try {
      let response = await axios.get('https://plugin.tebex.io/queue', this.#header);
      return response.data
    } catch (error) { throw error; }
  }

  async getListing() {
    try {
      let response = await axios.get('https://plugin.tebex.io/listing', this.#header);
      return response.data
    } catch (error) { throw error; }
  }

  async getPackages() {
    try {
      let response = await axios.get('https://plugin.tebex.io/packages', this.#header);
      return response.data
    } catch (error) { throw error; }
  }

  async getPayments() {
    try {
      let response = await axios.get('https://plugin.tebex.io/payments', this.#header);
      return response.data
    } catch (error) { throw error; }
  }

  async makeCheckout() {
    try {
      let response = await axios.post('https://plugin.tebex.io/checkout', this.#header);
      return response.data;
    } catch (error) { throw error; }
  }
}