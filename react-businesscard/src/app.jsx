import React from "react";
import ReactDOM from "react-dom/client";
import Title from "./components/Title"
import Footer from "./components/Footer";
import Biography from "./components/Biography";
import EmailButton from "./components/EmailButton";
import SocialButton from "./components/SocialButton";

function Page() {
  return (
    <div className="container">
      <Title />
      <div className="buttons">
        <EmailButton />
        <SocialButton />
      </div>
      <Biography />
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Page />);

