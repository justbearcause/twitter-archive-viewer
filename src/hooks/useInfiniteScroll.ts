import { useState, useEffect } from "react";

const useInfiniteScroll = (callback: () => void) => {
  const [isFetching, updateIsFetching] = useState(false);
  const [lastScroll, updateLastScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) {
      return;
    }

    const now = new Date().getTime();
    if (now - lastScroll < 1000) {
      return;
    }

    updateLastScroll(now);
    callback();
  }, [isFetching]);

  function handleScroll() {
    updateIsFetching(
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight && !isFetching
    );
  }

  return [isFetching, updateIsFetching];
};

export default useInfiniteScroll;
