import React from 'react'
import { Layout , Menu} from 'antd'
import Head from 'next/head';
import { FolderTwoTone } from '@ant-design/icons';


const {Header , Footer , Content} = Layout;
const items = [
    {
        key : 1,
        label : 'Home'
    },{
        key : 2,
        label : 'Settings'

    },
    {

        key : 3,
        label : 'Collection'
    },{
        key : 4,
        label : 'Docs'
    }
]
function Page() {
  return (
    <Layout>
     <Header>
       <Menu
       theme='dark'
       mode="horizontal"
       items={items}
     
       />
     </Header>

     <Content style={{}}>
        Hey there this is the content Hey there this is the content Hey there this is the content Hey there this is the content 
        Hey there this is the content Hey there this is the content Hey there this is the content 
        Hey there this is the content Hey there this is the content Hey there this is the content 
     </Content>


     <Footer>
        All rights reserved @{}
     </Footer>
    </Layout>
  )
}

export default Page
