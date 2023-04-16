import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { createContext, useState } from 'react';

const defaultConfig = [
  {
    name: 'canPushNotification',
    value: true,
  },
  {
    name: 'canPlaySound',
    value: true,
  },
];

export const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
  const [config, setConfig] = useState([]);

  async function updateConfig(name, payload) {
    const updatedConfig = config.map(currentConfig =>
      currentConfig.name === name ? { name, value: payload } : currentConfig
    );
    console.log(updatedConfig);
    setConfig(updatedConfig);
    try {
      await AsyncStorage.setItem('@stardust:config', JSON.stringify(updatedConfig));
    } catch (error) {
      console.log(error);
    }
  }

  async function getConfig() {
    try {
      const config = JSON.parse(await AsyncStorage.getItem('@stardust:config')) ?? defaultConfig;
      setConfig(config);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getConfig();
  }, []);

  return (
    <ConfigContext.Provider value={{ config, updateConfig }}>{children}</ConfigContext.Provider>
  );
};
