import React, { useEffect } from "react";
import Counter from "../../app/api/agent";
import RetroHitCounter from "react-retro-hit-counter";

import styled from "styled-components";

const Wrapper = styled.div`
  margin-right: 2.3em;
`;

interface IProps {
  counter: string;
  id: string;
  page: string;
}

const Ticker: React.FC<IProps> = ({ counter, id, page }) => {
  useEffect(() => {
    updatePageInfo();
  }, []);

  const updatePageInfo = async () => {
    console.log("from update");
    console.log(counter);
    await Counter.update(id, page, counter);
  };

  return (
    <Wrapper>
      <RetroHitCounter
        hits={counter}
        size={20}
        minLength={3}
        borderThickness={4}
      />
    </Wrapper>
  );
};

export default Ticker;
