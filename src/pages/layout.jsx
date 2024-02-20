import React from "react"
import { Layout } from "antd";
import styles from './css/layout.module.css'
import Routerpages from "../routers";


const { Header, Footer, Sider, Content } = Layout;

const layoutStyle = {
    height:'100%',
    width:'100%'
  };

const App=()=>{
    
    return<>
    
    <Layout style={layoutStyle} className={styles.Layoutcot}>
      <Header>Header</Header>
      <Layout>
      
        
            <Routerpages/>
       
        
      </Layout>
      <Footer className={styles.footcon}>Footer</Footer>
    </Layout>
    
    </>
}

export default App;