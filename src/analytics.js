import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-72CSF2ZCEF");
};

export const trackPageView = (path) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};
