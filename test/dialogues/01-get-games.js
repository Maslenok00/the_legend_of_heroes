import { getJson, printResult } from "./api-client.js";

const { url, data } = await getJson("/api/game");

printResult("Список игр", url, data);
