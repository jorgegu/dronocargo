import { useState, useEffect, FunctionComponent } from "react";
import styled from "styled-components";
import DeliveryHeader from "../components/deliveryHistory/DeliveryHeader";
import DeliveryList from "../components/deliveryHistory/DeliveryList";
import getVehicleTypes from "../services/getVehicleTypes";
import { VehicleTypes } from "../interfaces";

const PageContainer = styled.div``;

const DeliveryHistoryPage: FunctionComponent = () => {
  const [data, setData] = useState<VehicleTypes[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      const response = await getVehicleTypes();
      setData(response);
    };
    getData();
  }, []);

  const handleCreateData = () => {};
  return (
    <PageContainer>
      <DeliveryHeader onCreateData={handleCreateData} />
      {data && <DeliveryList dataList={data} />}
    </PageContainer>
  );
};

export default DeliveryHistoryPage;
