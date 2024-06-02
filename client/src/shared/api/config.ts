import { BACKEND_URL } from "../constants";
import { Configuration, DefaultApi } from "./generated";

export const buildConfig = () => {
  const config = new Configuration({
    basePath: BACKEND_URL,
  });
  return config;
};

const getClient = () => {
  const config = buildConfig();
  return new DefaultApi(config);
};


export default getClient;
