import { getJson, getNumberArg, printResult } from "./api-client.js";

const gameId = getNumberArg("game-id", 1);

const { url, data } = await getJson("/api/file", {
  game_id: gameId
});

printResult(`Файлы сценариев для game_id=${gameId}`, url, data);
