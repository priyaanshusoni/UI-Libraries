import React from 'react'
import { Button, Divider, Flex, Tooltip , Input } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { DownSquareOutlined } from '@ant-design/icons'
function index() {
  return (
    <div>
      <Flex gap="2px">

      <Button type='default' property="danger" variant='outlined'>Hi There</Button>
      <Button type='primary' property='danger'>Hi There</Button>
      <Button type='link' variant="outlined">Hi There</Button>
      <Button type='dashed'>Hi There</Button>
      <Button type='text' variant='dashed' style={{backgroundColor:"red" , fontSize:"20px", border:"50px"}}>Hi There</Button>


   
      </Flex>

      <Divider style={{color:"red" }}/>



      <Flex wrap gap="small">

        <Tooltip>
        <Button type='default' property="danger" variant='outlined' icon={<DownSquareOutlined />} iconPosition="end">Drop Down</Button>
        </Tooltip>

      </Flex>


      <Input placeholder='My name is ...'
        prefix = {<UserOutlined/>}
        suffix = {<UserOutlined/>}
        allowClear
        maxLength={10}
        type='password'
        showCount
        
        
      
      />
 

     
    </div>
  )
}

export default index
