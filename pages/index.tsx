import type { NextPage } from "next";

import DeliveryHistoryPage from "../containers/DeliveryHistoryPage";
import Layout from "../components/layout";
import { Delivery } from "../interfaces";
import { initialData } from "../services/deliveryData";

interface Props {
  deliveryData: Delivery[];
}

const Home: NextPage<Props> = ({ deliveryData }) => {
  return <DeliveryHistoryPage deliveryData={deliveryData} />;
};

export async function getStaticProps() {
  return {
    props: {
      deliveryData: initialData,
    },
  };
}

export default Home;
