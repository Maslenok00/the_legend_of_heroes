import { getArrayArg, getBooleanArg, getJson, getNumberArg, getArg, printResult } from "./api-client.js";

const gameId = getNumberArg("game-id", 1);
const pageNumber = getNumberArg("page", 1);
const pageSize = getNumberArg("page-size", 20);
const sort = getArg("sort", "rows");
const asc = getBooleanArg("asc", false);
const includeRemakes = getBooleanArg("include-remakes", false);
const playedGames = getArrayArg("played-games").map(Number).filter(Number.isFinite);

const { url, data } = await getJson("/api/chr/detail", {
  game_id: gameId,
  page_number: pageNumber,
  page_size: pageSize,
  sort,
  asc,
  "played_games[]": playedGames,
  include_remakes: includeRemakes
});

printResult("Детальная статистика персонажей", url, data);
