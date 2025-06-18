import AsyncStorage from "@react-native-async-storage/async-storage";
import { DataCalculate } from "./interfaces";

export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value === null) return false;
    return convertDataOfArray(value);
  } catch (error) {
    return false;
  }
};

export const setDataOneMore = async (data: DataCalculate, key: string) => {
  try {
    let getInfo = await getData(key);
    if (!getInfo) return false;
    getInfo.push(data);
    await AsyncStorage.setItem(key, JSON.stringify(getInfo));
    return data.id;
  } catch (error) {
    return false;
  }
};

const convertDataOfArray = (data: string) => {
  try {
    const parsedArray = JSON.parse(data);
    if (Array.isArray(parsedArray)) {
      return parsedArray;
    } else {
      console.warn("El dato almacenado no es un array.");
      return [];
    }
  } catch (error) {
    console.error("Error al parsear el string del AsyncStorage:", error);
    return [];
  }
};

export const removeDataOfStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {}
};

export const initialData = async (key: string) => {
  const data = await getData(key);
  if (!data) return await AsyncStorage.setItem(key, "[]");
};

export const getItemList = async (id: string, key: string) => {
  try {
    const data = await getData(key);
    if (!data)
      return {
        status: 1,
        message: "No found",
        data: -1,
      };
    return data.find((item) => item.id === id);
  } catch (error) {
    return {
      status: 1,
      message: "No found",
      data: -1,
    };
  }
};

export const removeItemList = async (id: string, key: string) => {
  try {
    const data = await getData(key);
    if (!data) return false;
    const newData = data.filter((item) => item.id !== id);
    await AsyncStorage.setItem(key, JSON.stringify(newData));
    return true;
  } catch (error) {
    return false;
  }
};
