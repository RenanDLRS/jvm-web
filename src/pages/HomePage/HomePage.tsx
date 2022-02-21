import React from "react";
import Header from "../../components/DefaultComponents/Header/Header";
import PageContainer from "../../components/DefaultComponents/PageContainer/PageContainer";
import Footer from "../../components/Footer/Footer";

const HomePage: React.FC = () => {
  return (
    <PageContainer>
      <Header />
      <h1>JVM</h1>
      <Footer />
    </PageContainer>
  );
};

export default HomePage;
