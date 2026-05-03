import { getArg, getArrayArg, getJson, printResult } from "./api-client.js";

const chr = getArg("chr", "Estelle");
const playedGames = getArrayArg("played-games").map(Number).filter(Number.isFinite);

const { url, data } = await getJson("/api/chr", {
  chr,
  "played_games[]": playedGames
});

printResult(`Поиск персонажей по имени: ${chr}`, url, data);
