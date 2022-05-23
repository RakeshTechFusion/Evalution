import { useEffect, useState } from "react";
import { Card } from "./Card";
// import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import axios, { AxiosResponse } from "axios";
// import { getData } from "../../Redux/action";

type StoreType = {
  count: number;
};

export type Item = {
  id: number;
  product_name: string;
  rating: number;
  price: number;
  category: string;
};

function Body() {
  const [data, setData] = useState<Item[]>([]);

  // const count = useSelector<StoreType, number>((store) => store.count);
  // const dispatch: any = useDispatch();

  useEffect(() => {
    // dispatch(getData);
    axios
      .get("http://localhost:8080/products")
      .then((res: AxiosResponse) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container grid grid-cols-2 w-2/3 m-auto">
      {/* Iterate over data and show `Card` here */}
      {data.map((el) => (
        <Card
          key={uuid()}
          id={el.id}
          product_name={el.product_name}
          rating={el.rating}
          price={el.price}
          category={el.category}
        />
      ))}
    </div>
  );
}

export { Body };