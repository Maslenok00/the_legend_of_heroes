import { getArg, getJson, getNumberArg, printResult } from "./api-client.js";

const gameId = getNumberArg("game-id", 1);
const fname = getArg("fname", "c0100");

const { url, data } = await getJson("/api/file", {
  game_id: gameId,
  fname
});

printResult(`Метаданные файла ${fname} для game_id=${gameId}`, url, data);
