import Chance from "chance";

const chance = new Chance();

export default (request, response) => {
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    age: chance.age(),
    twitter: chance.twitter(),
    geohash: chance.geohash(),
  };

  response.status(200).json(character);
};
