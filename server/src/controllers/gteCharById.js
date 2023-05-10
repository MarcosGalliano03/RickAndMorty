const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
  try {
    const { id } = req.params;

    const result = await axios(`${URL}${id}`);
    const { id: characterId, status, name, species, origin, image, gender } = result.data;

    if (name) {
      const character = {
        id: characterId,
        status,
        name,
        species,
        origin,
        image,
        gender,
      };
      return res.status(200).json(character);
    }
    return res.status(400).send("Not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = { getCharById };