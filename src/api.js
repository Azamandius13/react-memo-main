const API_URL = "https://wedev-api.sky.pro/api/leaderboard"
export async function getPlayersList() {
    const response = await fetch(API_URL, {
        headers: {
          method: "GET",
        },
      });

      if (!response.ok) {
        throw new Error("Какая то ошибка бро на Get");
      }

      const data = await response.json();
      return data;
}

export async function addPlayerToLeaderboard({ name, time }) {
  const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({
          name,
          time,
        }),
    });

    if (!response.ok) {
      throw new Error("Какая то ошибка бро на POST");
    }
  

    const data = await response.json();
    return data;
}