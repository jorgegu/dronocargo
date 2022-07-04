import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout";

const Delivery: FunctionComponent = () => {
  const router = useRouter();
  const { id } = router.query;

  return <h1> Order ID: {id}</h1>;
};

export default Delivery;
