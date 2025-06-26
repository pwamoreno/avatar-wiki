export async function getAffiliation(affiliationId) {
  const data = await fetch(
    `https://last-airbender-api.fly.dev/api/v1/characters?affiliation=${affiliationId}`
  ).then((res) => res.json());
//   console.log("characters", characters);
  return data
}

const Affiliations = async ({ params }) => {
  const { affiliationId } = await params;
  // console.log("affiliation", affiliationId)
  const characters = await getAffiliation(affiliationId);
  // console.log("characters", characters)
  return (
    <div>
      <h1>Affiliation matching "{affiliationId}"</h1>
      <ul>
        {characters.map((character) => {
          return <li key={character._id}>
            <img src={character.photoUrl} alt=''/>
            <h1>{character.name }</h1>
            <p>Affiliation: {character.affiliation}</p>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default Affiliations;
