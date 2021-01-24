import React, { useEffect, useState } from "react";
import Landing from "./component/home/Landing";
import Navbar from "./component/nav/Navbar";
import Loading from "./component/loading/Loading";
function App() {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(false);
    }, 1000);
  }, []);
  return (
    <>
      {loaded ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Landing />
        </>
      )}
    </>
  );
}

export default App;
