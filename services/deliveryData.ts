import { Delivery } from '../interfaces'

export const initialData: Delivery[] = [
    {
      status: "Ready",
      orderId: "009-300FCT",
      technician: "Ben Santana",
      platform: "Gamma",
      drone: "DJI-004Q",
      technicalCheck: "Passed",
    },
    {
      status: "Ready",
      orderId: "008-300FCT",
      technician: "Juan Reynosa",
      platform: "Gamma",
      drone: "DJI-004Q",
      technicalCheck: "Passed",
    },
    {
      status: "Ready",
      orderId: "007-300FCT",
      technician: "Shan Smith",
      platform: "Gamma",
      drone: "DJI-004Q",
      technicalCheck: "Passed",
    },
    {
      status: "Ready",
      orderId: "006-300FCT",
      technician: "Gerardo Torres",
      platform: "Gamma",
      drone: "DJI-004Q",
      technicalCheck: "Passed",
    },
    {
      status: "Ready",
      orderId: "005-300FCT",
      technician: "Leonardo Flores",
      platform: "Beta",
      drone: "DJI-004Q",
      technicalCheck: "Passed",
    },
    {
      status: "Ready",
      orderId: "004-300FCT",
      technician: "Miguel Obregón",
      platform: "Beta",
      drone: "DJI-004Q",
      technicalCheck: "Passed",
    },
    {
      status: "Ready",
      orderId: "003-300FCT",
      technician: "Mariano Arribas",
      platform: "Beta",
      drone: "DJI-004Q",
      technicalCheck: "Passed",
    },
    {
      status: "Ready",
      orderId: "002-300FCT",
      technician: "Jessica Salinas",
      platform: "Alpha",
      drone: "DJI-004Q",
      technicalCheck: "Passed",
    },
    {
      status: "Ready",
      orderId: "001-300FCT",
      technician: "Ernesto Garcia",
      platform: "Alpha",
      drone: "DJI-004Q",
      technicalCheck: "Passed",
    },
  ];

const DELIVERY_DATA_KEY = 'deliveryData';

export const getDeliveryList = (): Delivery[] => {
  const dataString: string = localStorage.getItem(DELIVERY_DATA_KEY) || '[]'
  const data: Delivery[] = JSON.parse(dataString) || []
  return data;
}

export const addDelivery = (newDelivery: Delivery): void => {
  const data = getDeliveryList();
  const newData = [newDelivery, ...data];
  localStorage.setItem(DELIVERY_DATA_KEY, JSON.stringify(newData));
}

export const createDeliveryData = (data: Delivery[]): void => {
  localStorage.setItem(DELIVERY_DATA_KEY, JSON.stringify(data));
}