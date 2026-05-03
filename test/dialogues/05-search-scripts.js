import { getArg, getArrayArg, getBooleanArg, getJson, getNumberArg, printResult } from "./api-client.js";

const q = getArg("q", "bracer");
const gameId = getNumberArg("game-id", 1);
const pageNumber = getNumberArg("page", 1);
const pageSize = getNumberArg("page-size", 20);
const strictSearch = getBooleanArg("strict", false);
const characters = getArrayArg("chr");
const playedGames = getArrayArg("played-games").map(Number).filter(Number.isFinite);

const { url, data } = await getJson("/api/script/search", {
  q,
  "chr[]": characters,
  game_id: gameId,
  "played_games[]": playedGames,
  strict_search: strictSearch,
  page_number: pageNumber,
  page_size: pageSize
});

printResult("Поиск по репликам", url, data);
