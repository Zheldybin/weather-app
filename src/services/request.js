const GET = async (url, error = "Такого города нет") => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(error);
    }
    return await response.json();
  } catch (e) {
    throw new Error(e.message);
  }
};

const POST = async (url, params) => {
  try {
    const response = await fetch(url, {
      method: "POST",
    });
    if (!response.ok) {
      throw new Error("Такого города нет!!!");
    }
    return await response.json();
  } catch (e) {
    throw new Error(e);
  }
};

export { GET };
