import { eng, tel, hin } from "../utils/languageData";

export const getLanguage = (selectedLanguage) => {
  let lang;
  switch (selectedLanguage) {
    case "eng":
      lang = eng;
      break;
    case "tel":
      lang = tel;
      break;
    case "hin":
      lang = hin;
      break;
    default:
      break;
  }
  return lang;
};
