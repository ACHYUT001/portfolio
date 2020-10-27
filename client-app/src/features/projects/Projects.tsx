import React, { useEffect, useState } from "react";
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router";
import AmazonClonePage from "./AmazonClonePage";
import LetsChatPage from "./LetsChatPage";
import PortfolioPage from "./PortfolioPage";
import "./Projects.css";
import {
  DefaultButton,
  IconButton,
  IIconProps,
  Image,
  initializeIcons,
} from "office-ui-fabric-react";
import {
  TooltipHost,
  ITooltipHostStyles,
} from "office-ui-fabric-react/lib/Tooltip";
import { useId } from "@uifabric/react-hooks";
import {
  HeroContainer,
  HeroLinks,
  HeroTitle,
  PageBody,
  Wrapper,
} from "./StyledPage";
import { Link } from "react-router-dom";
import { mergeStyles } from "@fluentui/react";
import Home from "../home/Home";

const iconClass = mergeStyles({
  height: 50,
  width: 50,
  margin: "0 25px",
});

interface IInfo {
  name: string;
  link: string;
  publicLink: string;
  githubLink: string;
}

initializeIcons();

const Projects = () => {
  const match = useRouteMatch();
  const hist = useHistory();
  const loc = useLocation();
  const arr: IInfo[] = [
    {
      name: "LetsChat",
      link: `${match.url}/letschat`,
      publicLink: "https://github.com/ACHYUT001/LetsChatwReactnDNCore",
      githubLink: "https://github.com/ACHYUT001/LetsChatwReactnDNCore",
    },
    {
      name: "Amazon Clone",
      link: `${match.url}/amazonclone`,
      publicLink: "",
      githubLink: "https://github.com/ACHYUT001/AmazonClone",
    },
    {
      name: "Portfolio",
      link: `${match.url}/portfolio`,
      publicLink: "",
      githubLink: "https://github.com/ACHYUT001/portfolio",
    },
  ];

  const [leftArrow, setLeftArrow] = useState<IInfo>({
    name: "",
    link: "",
    publicLink: "",
    githubLink: "",
  });
  const [rightArrow, setRightArrow] = useState<IInfo>({
    name: "",
    link: "",
    publicLink: "",
    githubLink: "",
  });
  const [current, setCurrent] = useState<IInfo>({
    name: "",
    link: "",
    publicLink: "",
    githubLink: "",
  });

  const leftToolTipId = useId("leftTooltip");
  const rightToolTipId = useId("rightTooltip");

  useEffect(() => {
    const target: string = loc.pathname.split("/").pop()!.toString();

    let index = arr.findIndex(
      (ele) =>
        (ele.name.includes(" ") === true
          ? ele.name.split(" ").join("").toLowerCase()
          : ele.name.toLowerCase()) === target
    );
    if (index >= 0) {
      setCurrent(arr[index]);
      setLeftArrow(arr[index - 1 < 0 ? 2 : index - 1]);
      setRightArrow(arr[index + 1 > 2 ? 0 : index + 1]);
    } else {
      // if (target === "projects") {
      //   setCurrent(arr[0]);
      //   setLeftArrow(arr[2]);
      //   setRightArrow(arr[1]);
      // } else {
      hist.push("/projects/letschat");
    }
  }, [loc.pathname]);

  const handleRightClick = () => {
    let temp: IInfo = current;
    setCurrent(rightArrow);
    setRightArrow(leftArrow);
    setLeftArrow(temp);
  };

  const handleLeftClick = () => {
    let temp: IInfo = current;
    setCurrent(leftArrow);
    setLeftArrow(rightArrow);
    setRightArrow(temp);
  };

  return (
    <Wrapper>
      <HeroContainer>
        <TooltipHost
          content={leftArrow.name}
          // This id is used on the tooltip itself, not the host
          // (so an element with this id only exists when the tooltip is shown)
          id={leftToolTipId}

          // styles={hostStyles}
        >
          <Link to={leftArrow.link}>
            <IconButton
              iconProps={{ iconName: "ChromeBack" }}
              onClick={() => handleLeftClick()}
              // title={leftArrow.name }
              // ariaLabel={leftArrow.name}
            />
          </Link>
        </TooltipHost>

        <HeroTitle>
          <h1>{current.name}</h1>

          <HeroLinks>
            <DefaultButton
              href={current.publicLink}
              style={{ border: 0, width: "fit-content", fontSize: 25 }}
            >
              {`${
                current.name.includes(" ")
                  ? current.name.split(" ").join("").toLowerCase()
                  : current.name.toLowerCase()
              }.com`}
            </DefaultButton>
            <DefaultButton
              href={current.githubLink}
              style={{ border: 0, width: "fit-content", fontSize: 25 }}
            >
              <img
                style={{ height: 25, width: 30 }}
                src="/assets/mark-github.svg"
              />
            </DefaultButton>
          </HeroLinks>
        </HeroTitle>

        <TooltipHost
          content={rightArrow.name}
          // This id is used on the tooltip itself, not the host
          // (so an element with this id only exists when the tooltip is shown)
          id={leftToolTipId}

          // styles={hostStyles}
        >
          <Link to={rightArrow.link}>
            <IconButton
              iconProps={{ iconName: "ChromeBackMirrored" }}
              className={iconClass}
              onClick={() => handleRightClick()}
              // title={leftArrow.name }
              // ariaLabel={leftArrow.name}
            />
          </Link>
        </TooltipHost>
      </HeroContainer>

      <PageBody>
        <Switch>
          <Route exact path={`${match.path}/letschat`}>
            <LetsChatPage />
          </Route>

          <Route exact path={`${match.path}/amazonclone`}>
            <AmazonClonePage />
          </Route>
          <Route exact path={`${match.path}/portfolio`}>
            <PortfolioPage />
          </Route>
          {/* <Route path={"projects/(.*)"}>
            
          </Route> */}
        </Switch>
      </PageBody>

      <div className="content"></div>
      <h2>Projects</h2>
    </Wrapper>
  );
};

export default Projects;
