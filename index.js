import axios from "axios";
import { config } from "dotenv"; config();
import { Tebex } from "./handlers/tebex.js";

const tebexSecret = process.env.tebexSecret;

const tebex = new Tebex(tebexSecret);
const { players } = await tebex.getQueue()
  .catch((error) => { console.log(error) });

console.log(players);

const command = await tebex.getOnlineCommands('SeaLeopard35302')
  .catch((error) => { console.log(error) });
