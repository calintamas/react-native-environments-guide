import Config from 'react-native-config';

console.log(Config);

export const getConfig = () => {
  return {
    API_HOST: Config.API_HOST,
    BACKGROUND_COLOR: Config.BACKGROUND_COLOR,
  };
};
