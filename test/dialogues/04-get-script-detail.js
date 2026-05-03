import { getArg, getJson, getNumberArg, printResult } from "./api-client.js";

const gameId = getNumberArg("game-id", 1);
const fname = getArg("fname", "c0100");

const { url, data } = await getJson(`/api/script/detail/${gameId}/${encodeURIComponent(fname)}`);

printResult(`Сценарий ${fname} для game_id=${gameId}`, url, data);
