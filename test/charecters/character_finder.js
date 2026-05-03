
fetch(
  "https://api.igdb.com/v4/characters",
  { method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Client-ID': '',
      'Authorization': '',
    },
    body: "fields akas,character_gender,character_species,checksum,country_name,created_at,description,games,gender,mug_shot,name,slug,species,updated_at,url;"
})
  .then(response => {
      console.log(response.json());
  })
  .catch(err => {
      console.error(err);
  });