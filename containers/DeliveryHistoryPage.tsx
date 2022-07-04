import { useState, useEffect, FunctionComponent } from "react";
import styled from "styled-components";
import DeliveryHeader from "../components/deliveryHistory/DeliveryHeader";
import DeliveryList from "../components/deliveryHistory/DeliveryList";
import { createDeliveryData, getDeliveryList } from "../services/deliveryData";
import { Delivery } from "../interfaces";

interface Props {
  deliveryData: Delivery[];
}

const PageContainer = styled.div``;

const DeliveryHistoryPage: FunctionComponent<Props> = ({
  deliveryData,
}: Props) => {
  const [data, setData] = useState<Delivery[]>(deliveryData);

  useEffect(() => {
    //Setting data to localStorage
    createDeliveryData(deliveryData);
  }, []);

  const handleCreateData = () => {
    setData(getDeliveryList());
  };
  return (
    <PageContainer>
      <DeliveryHeader onCreateData={handleCreateData} />
      <DeliveryList dataList={data} />
    </PageContainer>
  );
};

export default DeliveryHistoryPage;
