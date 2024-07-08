import { useEffect } from "react";
import { getCabins } from "../../data/apiCabins";

export default function Cabins() {
  useEffect(() => {
    getCabins().then((res) => {
      console.log(res);
    });
  }, []);

  return <div></div>;
}
