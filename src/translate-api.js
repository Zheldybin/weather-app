import { GET } from "./services/request";

const TRANSLATES_URL = "https://www.weatherapi.com/docs/conditions.json";
const LANG_ISO = "ru";

let translates = [];

const getTranslates = async () => {
  try {
    const response = await GET(TRANSLATES_URL);
    translates = response;
    return response;
  } catch (e) {
    console.error(e);
  }
};

const translate = (code, isDay) => {
  const item = translates
    .find((el) => el.code === code)
    .languages.find((el) => el.lang_iso === LANG_ISO);

  console.log(item);
  return isDay ? item.day_text : item.night_text;
};

export { getTranslates, translate };
