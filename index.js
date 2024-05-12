import axios from "axios";
import { config } from "dotenv"; config();
import { Tebex } from "./handlers/tebex.js";


const tebexSecret = process.env.tebexSecret;

const tebex = new Tebex(tebexSecret);

const info = await tebex.getQueue();
console.log(info);


