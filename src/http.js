export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Fetching places is fail......");
  }
  return resData.places;
}

export async function UpdateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-type": "application/json",
    },
  });
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Fail to update data");
  }
  return resData.message;
}

export async function fetchUserPlaces() {
  const response = await fetch("http://localhost:3000/user-places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch user places");
  }
  return resData.places;
}
