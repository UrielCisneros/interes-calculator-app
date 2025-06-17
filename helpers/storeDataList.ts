import { NAME_DATA_STORAGE } from "@/constants/DataStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DataCalculate } from "./interfaces";




export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem(NAME_DATA_STORAGE);
    if (value === null) return false;
    return convertDataOfArray(value);
  } catch (error) {
    return false;
  }
};

export const setDataOneMore = async (data: DataCalculate) => {
  try {
    let getInfo = await getData();
    if (!getInfo) return false;
    getInfo.push(data);
    await AsyncStorage.setItem(NAME_DATA_STORAGE, JSON.stringify(getInfo));
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

export const removeDataOfStorage = async () => {
  try {
    await AsyncStorage.removeItem(NAME_DATA_STORAGE);
  } catch (error) {}
};

export const initialData = async () => {
  const data = await getData();
  if (!data) return await AsyncStorage.setItem(NAME_DATA_STORAGE, "[]");
};

export const getItemList = async (id: string) => {
  const data = await getData();
  if (!data)
    return {
      status: 1,
      message: "No found",
      data: -1,
    };
  return data.find((item) => item.id === id);
};
