import React from "react";
import { Flex, Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const HeaderStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0957d7",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};
const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "calc(50% - 8px)",
  maxWidth: "calc(50% - 8px)",
};

function LayoutComponent() {
  return (
    <Flex gap="middle" wrap={true}>
      <Layout style={layoutStyle}>
        <Header style={HeaderStyle}>Header</Header>
        <Content style={contentStyle}>Content</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>


      <Layout style={layoutStyle}>
      <Header style={HeaderStyle}>Header</Header>
      
      <Layout>
      
        <Content style={contentStyle}>Content</Content>

        <Sider width="25%" style={siderStyle}>
          Sider
        </Sider>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>




    <Layout style={layoutStyle}>

    <Sider width="25%" style={siderStyle}>
          <div style={{border:"1px solid white" , borderRadius:"15px"}}>
            My account
          </div>

          <div>
            Transactions
          </div>
        </Sider>

        

        <Layout>
        <Header style={HeaderStyle}>Header</Header>
  

  <Content style={contentStyle}>Content</Content>



<Footer style={footerStyle}>Footer</Footer>

        </Layout>
     
    </Layout>



    {/* <Sider width="25%" style={siderStyle}>
          Sider

        </Sider> */}



    </Flex>
  );
}

export default LayoutComponent;
