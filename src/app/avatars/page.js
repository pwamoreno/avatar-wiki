import React from "react";

export async function fetchAvatars() {
  const avatars = await fetch(
    "https://last-airbender-api.fly.dev/api/v1/characters/avatar",
    {
      next: { revalidate: 3600 },
    }
  ).then((res) => res.json());
//   console.log(avatars);
  return avatars;
}

const Avatars = async () => {
  const avatars = await fetchAvatars();
  return (
    <div>
      <h1>Avatars</h1>
      <ul>
        {avatars.map((avatar) => {
          return <li key={avatar._id}>{avatar.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Avatars;
