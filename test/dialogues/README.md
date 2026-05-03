# Trails in the Database API tests

Запускать из корня проекта:

```bash
node test/01-get-games.js
node test/02-get-files.js --game-id=1
node test/03-get-file-by-name.js --game-id=1 --fname=c0100
node test/04-get-script-detail.js --game-id=1 --fname=c0100
node test/05-search-scripts.js --q=bracer --game-id=1 --page=1 --page-size=20
node test/06-search-scripts-stat.js --q=bracer --game-id=1
node test/07-search-characters.js --chr=Estelle
node test/08-get-character-details.js --game-id=1 --sort=rows --page=1 --page-size=20
node test/09-get-character-detail-stat.js --game-id=1
```

Массивы можно передавать повтором или через запятую:

```bash
node test/05-search-scripts.js --chr=Estelle --chr=Joshua --game-id=1
node test/05-search-scripts.js --played-games=1,2,3 --q=bracer
```

Если нужно проверить другой хост API:

```bash
TRAILS_DB_API_BASE=https://trailsinthedatabase.com node test/01-get-games.js
```
