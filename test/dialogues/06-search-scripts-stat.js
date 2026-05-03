import { getArg, getArrayArg, getBooleanArg, getJson, getNumberArg, printResult } from "./api-client.js";

const q = getArg("q", "bracer");
const gameId = getNumberArg("game-id", 1);
const strictSearch = getBooleanArg("strict", false);
const characters = getArrayArg("chr");
const playedGames = getArrayArg("played-games").map(Number).filter(Number.isFinite);

const { url, data } = await getJson("/api/script/search/stat", {
  q,
  "chr[]": characters,
  game_id: gameId,
  "played_games[]": playedGames,
  strict_search: strictSearch
});

printResult("Статистика поиска по репликам", url, data);
