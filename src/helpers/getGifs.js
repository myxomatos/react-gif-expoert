export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=qETt1oX8cnQhL2TRIfu0P8rKEtOyoY84&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
