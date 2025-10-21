import React from 'react'

import { Row , Col  } from 'antd'


const DemoBox = ({value , children}) =>{
    return (
        <p style={{height : value}}>
            {children}
        </p>
    )
}

function Home() {
  return (
    <div style={{backgroundColor : "orange", height:"100vh"}}>

        <Row justify="space-between" align="bottom" >
            <Col span={4} order={2} style={{backgroundColor : "skyblue"}}>
             <DemoBox value={100}>Col-4</DemoBox>
            </Col>
            <Col span={6} order={3} style={{backgroundColor : "skyblue"}}>
             <DemoBox value={100}>Col-4</DemoBox>
            </Col>
            <Col span={8} order={1} style={{backgroundColor : "skyblue"}}>
             <DemoBox value={100}>Col-4</DemoBox>
            </Col>
        </Row>
      
    </div>
  )
}

export default Home
