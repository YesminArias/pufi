import * as React from "react";
import Card from "../componentes/card";
import Footer from "../componentes/footer";
import Header from "../componentes/header";
import Newsletter from "../componentes/newsletter";
import Instagram from "../componentes/instagram";

function Home() {
  return (
    <div className="App">

      <Header />
      <Card />
      <Instagram/>
      <Newsletter/>
      <Footer />
    </div>
  );
}

export default Home;
