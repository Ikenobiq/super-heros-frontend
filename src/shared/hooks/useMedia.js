import { useMediaQuery } from "react-responsive";

const useMedia = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1279px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });
  return { isMobile, isDesktop };
};

export default useMedia;
