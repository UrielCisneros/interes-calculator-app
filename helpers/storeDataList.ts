import AsyncStorage from "@react-native-async-storage/async-storage";

const NAME_DATA_STORAGE = "data";

interface ListDataInterest {
  id: number;
  current_year: number;
  total_gains: string;
  gain_for_year: number;
  gain_without_berore_gain: string;
  mouth_gain: string;
}

interface DataCalculate {
  id: string;
  savings: string;
  years: number;
  total_gain: string;
  calculate_years: ListDataInterest[];
}

export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem(NAME_DATA_STORAGE);
    console.log(JSON.stringify(value, null, 2));
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
  console.log(JSON.stringify(data, null, 2));
  if (!data) return await AsyncStorage.setItem(NAME_DATA_STORAGE, "[]");
};
