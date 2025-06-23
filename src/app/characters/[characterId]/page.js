import React from 'react'


export async function generateStaticParams() {
    const characters = await fetch("https://last-airbender-api.fly.dev/api/v1/characters?perPage=500").then(res => res.json())
    // console.log("[Params]",characters)
    return characters.map((character) => ({
        characterId: character.name
    }))
}

export async function getCharacter(characterId) {
    // console.log(characterId)
  const results = await fetch(
    `https://last-airbender-api.fly.dev/api/v1/characters?name=${characterId}`,
    {
      next: { revalidate: 3600 },
    }
  ).then((res) => res.json());
//   console.log(results);
  return results[0];
}

const Characters = async ({ params }) => {
    const character = await getCharacter(params.characterId)
    // console.log("[CharcterDisplay]", character)
  return (
    <div>
        <img src={character.photoUrl} alt=''/>
        <h1>{ character.name }</h1>
        <p>Affiliation: { character.affiliation}</p>
    </div>
  )
}

export default Characters