import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Counter from "../../app/api/agent";
import Ticker from "../ticker/Ticker";

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 90rem;
  margin-top: 2em;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    border-top: 1px solid #ddd;
  }
`;

const HighLight = styled.div`
  color: #111;
  text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.4);
  font-weight: 700;
  line-height: 1;
  position: relative;
  display: inline-block;
  padding-left: 0.8rem;
  padding-right: 0.8rem;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    height: 1em;
    bottom: 0;
    margin: auto;
    border-radius: 0.2rem;
    background-color: rgba(111, 209, 189, 0.5);
    transition: all 0.8s 0.4s ease-in-out;
  }

  &:hover:before {
    transform: scale(1.05, 2.4);
    background-color: #6fd1bd;
    transition-delay: 0s;
    transition-duration: 0.2s;
  }
`;

const LineContainer = styled.div`
  font-size: 1.4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1rem -0.8rem 1.2rem;

  padding-top: 3.2rem;

  & a (:last-child) {
    margin-left: 0.6rem;
  }

  & a:hover {
    color: #111;
  }
`;

const LineContent = styled.div`
  padding-left: 0.8rem;
  padding-right: 0.8rem;
`;

interface IProps {
  id: string;
  page: string;
}

const Footer: React.FC<IProps> = ({ id, page }) => {
  const [counter, setCounter] = useState<string>("");

  useEffect(() => {
    getPageInfo(page, id);
  }, []);

  const getPageInfo = async (page: string, id: string) => {
    await Counter.get(id, page).then((val) => setCounter(val));
  };

  return (
    <FooterWrapper>
      <LineContainer>
        <LineContent>
          <HighLight>
            <Link to="/">
              <strong> Achyut Upadhyay</strong>
            </Link>
          </HighLight>
        </LineContent>
        <LineContent>
          {counter && <Ticker counter={counter} id={id} page={page} />}
        </LineContent>
        <LineContent>
          <a href="mailto:achyutpdh249@gmail.com">achyutpdh249@gmail.com</a>
        </LineContent>
      </LineContainer>
    </FooterWrapper>
  );
};

// const Footer = () => {
//   return (
//     <div className="aboutme__container u-keyline">
//       <div className="l-Footer">
//         <div className="l-Footer-col">
//           <strong className="Tag">Achyut Upadhyay</strong>
//         </div>
//         <div className="l-Footer-col Contact">
//           <Link to="/">achyutupadhyay.com</Link>
//           <a href="mailto:achyutpdh249@gmail.com">achyutpdh249@gmail.com</a>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Footer;
