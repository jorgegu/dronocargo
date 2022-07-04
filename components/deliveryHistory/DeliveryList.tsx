import { FunctionComponent } from "react";
import styled from "styled-components";
import DeliveryRow from "./DeliveryRow";
import { Delivery } from "../../interfaces";

interface Props {
  dataList: Delivery[];
}

const Container = styled.div``;
const DeliveryList: FunctionComponent<Props> = ({ dataList }: Props) => {
  return (
    <Container>
      {dataList.map((item, i) => (
        <DeliveryRow key={i} data={item} />
      ))}
    </Container>
  );
};

export default DeliveryList;
