import React, { useEffect, useState } from "react";
import Landing from "./component/home/Landing";
import Navbar from "./component/nav/Navbar";
import Loading from "./component/loading/Loading";
import Form from "./component/form/Form";
function App() {
  const [loaded, setLoaded] = useState(true);
  const [showForm, setForm] = useState(false);

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
          {showForm && <Form setForm={setForm} />}
          <Navbar />
          <Landing setForm={setForm} />
        </>
      )}
    </>
  );
}

export default App;
