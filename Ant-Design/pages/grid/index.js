import React from 'react'
import { Grid , Row , Col} from 'antd'


function Home() {
  return (
    <div>


       
        <Row gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}>

            <Col span={24} style={{backgroundColor:"blue"}}>Col</Col>
            <Col span={24} style={{backgroundColor:"blue"}}>Col</Col>
            <Col span={24} style={{backgroundColor:"blue"}}>Col</Col>
            <Col span={24} style={{backgroundColor:"blue"}}>Col</Col>

        </Row>
       
        <Row >

            <Col span={6} style={{backgroundColor:"blue"}}>Col</Col>
            <Col span={6} style={{backgroundColor:"blue"}}>Col</Col>
            <Col span={6} style={{backgroundColor:"blue"}}>Col</Col>
            <Col span={6} style={{backgroundColor:"blue"}}>Col</Col>

        </Row>
        <Row >

            <Col span={6} offset={6}  style={{backgroundColor:"blue"}}>Col</Col>
            <Col span={6} style={{backgroundColor:"blue"}}>Col</Col>
           

        </Row>
        <Row >

            
            <Col span={12}  offset={12} style={{backgroundColor:"blue"}}>Col</Col>
           

        </Row>
        <Row >

            
            <Col span={18} push={6}   style={{backgroundColor:"red"}}>
            
             <div>
                <p>
                    Hello Guys
                </p>
             </div>
            </Col>
            <Col span={6} pull={18}  style={{backgroundColor:"blue"}}>
            
            <div>
                <p>
                    Hello Guys
                </p>
             </div>
            
            
            </Col>





           

        </Row>
{/* 


  <Row>
  <Col span={12} >
        Test
        </Col>
        <Col span={12}>
        Test
        </Col>
  </Row>
       */}
      


      
    </div>
  )
}

export default Home
