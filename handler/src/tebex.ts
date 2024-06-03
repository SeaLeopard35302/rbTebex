import axios, { AxiosResponse } from "axios";

export class Tebex {
  private header: { headers: { "X-Tebex-Secret": string } };

  constructor(secret: string) {
    this.header = { headers: { "X-Tebex-Secret": secret } };
  }

  private getPlayerID(
    playerName: string,
    players: { id: number | undefined; name: string }[]
  ): { id: number | undefined; name: string } {
    for (let player of players) {
      if (player.name === playerName) {
        if (player.id === undefined) {
          throw new Error(`Player does not have an id`);
        }
        return player;
      }
    }
    throw new Error(`Player ${playerName} not found in list`);
  }

  async getInformation(): Promise<any> {
    try {
      const response: AxiosResponse<any> = await axios.get(
        "https://plugin.tebex.io/information",
        this.header
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getQueue(): Promise<{
    players: { id: number | undefined; name: string }[];
  }> {
    try {
      const response: AxiosResponse<{
        players: { id: number | undefined; name: string }[];
      }> = await axios.get("https://plugin.tebex.io/queue", this.header);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getOfflineCommands(): Promise<any> {
    try {
      const response: AxiosResponse<any> = await axios.get(
        "https://plugin.tebex.io/offline-commands",
        this.header
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getOnlineCommands(playerName: string): Promise<any> {
    const { players } = await this.getQueue();
    const player = this.getPlayerID(playerName, players);
    try {
      const response: AxiosResponse<any> = await axios.get(
        `https://plugin.tebex.io/online-command/${player.id}`,
        this.header
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
