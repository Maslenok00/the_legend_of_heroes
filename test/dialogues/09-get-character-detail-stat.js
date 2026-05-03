import { getArrayArg, getBooleanArg, getJson, getNumberArg, printResult } from "./api-client.js";

const gameId = getNumberArg("game-id", 1);
const includeRemakes = getBooleanArg("include-remakes", false);
const playedGames = getArrayArg("played-games").map(Number).filter(Number.isFinite);

const { url, data } = await getJson("/api/chr/detail/stat", {
  game_id: gameId,
  "played_games[]": playedGames,
  include_remakes: includeRemakes
});

printResult("Количество персонажей", url, data);
