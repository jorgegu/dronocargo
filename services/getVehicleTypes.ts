import { VehicleTypesApi } from '../interfaces'

const getVehicleTypes = async () => {

  try {
    const url =  'https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/mercedes?format=json'
    const data = await fetch(url)
    if (!data.ok) {
      throw Error('getVehicleTypeApiError')
    }
    const { Results } = await data.json()
    return Results.map((vehicle: VehicleTypesApi ) => {
      const {MakeId, MakeName, VehicleTypeId, VehicleTypeName} = vehicle;
      return {
        makeId: MakeId,
        makeName: MakeName,
        vehicleTypeId: VehicleTypeId,
        vehicleTypeName: VehicleTypeName
      }
    })
  } catch(e) {
    console.log(e)
  }
}

export default getVehicleTypes;