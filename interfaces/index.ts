export interface Delivery {
    status: string;
    orderId: string;
    technician: string;
    platform: string;
    drone: string;
    technicalCheck: string;
  }

export interface VehicleTypesApi {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}

export interface VehicleTypes {
  makeId: number;
  makeName: string;
  vehicleTypeId: number;
  vehicleTypeName: string;
}