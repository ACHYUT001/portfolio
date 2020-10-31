import React, { useEffect } from "react";
import Counter from "../../app/api/agent";

interface IProps {
  counter: string;
}

const Ticker: React.FC<IProps> = ({ counter }) => {
  useEffect(() => {
    updatePageInfo();
  }, []);

  const updatePageInfo = async () => {
    console.log("from update");
    console.log(counter);
    await Counter.update("1", "home", counter);
  };

  return <div>You are the {counter}rd person to visist this page</div>;
};

export default Ticker;
