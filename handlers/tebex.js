import axios from "axios";

export class Tebex {
  #header;
  #getPlayerID;
  constructor(secret) {
    this.#header = { headers: { 'X-Tebex-Secret': secret, } };

    this.#getPlayerID = (playerName, Array) => {
      for (let i = 0; i < Array.length; i++) {
        if (Array[i].name === name) {
          if (Array[i].id === undefined)
            throw new Error(`Player does not have an id`)
          return Array[i];
        }
      }
      throw new Error(`Player ${playerName} not found in list`)
    }
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

  async getOfflineCommands() {
    try {
      let response = await axios.get('https://plugin.tebex.io/offline-commands', this.#header);
      return response.data
    } catch (error) { throw error; }
  }

  async getOnlineCommands(player) {
    const p = player
    const { players } = await this.getQueue();
    console.log(players);
    const playerID = this.#getPlayerID(p, players);
    try {
      let response = await axios.get(`https://plugin.tebex.io/online-command/${playerID}`, this.#header);
      return response.data
    } catch (error) { throw error; }
  }
}