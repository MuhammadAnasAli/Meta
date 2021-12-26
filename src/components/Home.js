import { PageHeader, Button, Descriptions } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../firebase_config";
import { onAuthStateChanged } from "@firebase/auth";

export default function Home () {
  const navigate = useNavigate()
  const logout = ()=>{
    auth.signOut().then(navigate('/'))

  }
  const [user, setuser] = useState({})
  onAuthStateChanged(auth, (currentUser)=>{
    setuser(currentUser)
  })
  const uid = user.uid
  console.log(uid)
  return(
  <div className="site-page-header-ghost-wrapper">
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title="Home"
      subTitle="This is a subtitle"
      extra={[
        <Button key="3">Profile</Button>,
        <Button key="2">Settings</Button>,
        <Button key="1" type="primary" onClick={logout}>
          Logout
        </Button>,
      ]}
    >
      
      <Descriptions size="small" column={3}>
        <Descriptions.Item label="User Name:">{}</Descriptions.Item>
        <Descriptions.Item label="UID:">{uid}</Descriptions.Item>
        <Descriptions.Item label="Association">
          <a>.....</a>
        </Descriptions.Item>
        <Descriptions.Item label="Creation Time">...</Descriptions.Item>
        <Descriptions.Item label="Effective Time">...</Descriptions.Item>
        <Descriptions.Item label="Remarks">
          ...
        </Descriptions.Item>
      </Descriptions>
    </PageHeader>
  </div>
  
)}