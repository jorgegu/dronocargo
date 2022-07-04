import type { NextPage } from "next";
import Head from "next/head";
import DeliveryHistoryPage from "../containers/DeliveryHistoryPage";
import { Delivery } from "../interfaces";
import { initialData } from "../services/deliveryData";

interface Props {
  deliveryData: Delivery[];
}

const DeliveryHistory: NextPage<Props> = ({ deliveryData }) => {
  return (
    <>
      <Head>
        <title>Delivery History</title>
        <meta name="description" content="Dronocargo delivery history" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DeliveryHistoryPage deliveryData={deliveryData} />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      deliveryData: initialData,
    },
  };
}

export default DeliveryHistory;
