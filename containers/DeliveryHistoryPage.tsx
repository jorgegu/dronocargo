import { FunctionComponent } from "react";
import styled from "styled-components";
import DeliveryHeader from "../components/deliveryHistory/DeliveryHeader";
import DeliveryList from "../components/deliveryHistory/DeliveryList";
import { Delivery } from "../interfaces";

interface Props {
  deliveryData: Delivery[];
}

const PageContainer = styled.div``;

const DeliveryHistoryPage: FunctionComponent<Props> = ({
  deliveryData,
}: Props) => {
  return (
    <PageContainer>
      <DeliveryHeader />
      <DeliveryList dataList={deliveryData} />
    </PageContainer>
  );
};

export default DeliveryHistoryPage;
