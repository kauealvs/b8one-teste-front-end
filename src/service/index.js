const apiUrl = [
  {
    id: 1,
    title:
      "Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
    price: 2599,
    listPrice: 2813.99,
    Maxinstallment: 10,
  },
  {
    id: 2,
    title:
      "Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
    price: 2599,
    listPrice: 2813.99,
    Maxinstallment: 10,
  },
];

export const getProducts = async () => {
  const data = await fetch(apiUrl);
  const responseProducts = await data.json();

  return responseProducts.products;
};
