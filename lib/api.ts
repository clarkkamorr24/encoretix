export const url =
  "https://app.ticketmaster.com/discovery/v2/attractions?apikey=C4Hh0Fol3DhGfDqp1fY80GtGKwfj22it";

export async function fetchAttractions(keyword: string) {
  try {
    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/attractions?keyword=${keyword}&apikey=C4Hh0Fol3DhGfDqp1fY80GtGKwfj22it`
    );

    if (!response.ok) {
      throw new Error();
    }
    const data = response.json();
    return data;
  } catch (error) {
    throw new Error("Something went wrong!");
  }
}

export async function fetchDetailsAttractions(id: string) {
  try {
    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/attractions/${id}/?apikey=C4Hh0Fol3DhGfDqp1fY80GtGKwfj22it`
    );
    if (!response.ok) {
      throw new Error();
    }
    const data = response.json();
    return data;
  } catch (error) {
    throw new Error("Something went wrong!");
  }
}
