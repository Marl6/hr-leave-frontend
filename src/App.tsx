import React, { useState, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Layout, Menu, theme, Avatar, Button, Switch, Badge, Tooltip } from 'antd'
import type { MenuProps } from 'antd'
import { useNavigate, useLocation, Routes, Route } from 'react-router-dom'
import { routes, menuKeyToRoute } from './routes'
import api from './api/axios'
import logo from './assets/img/logo/logo.png'
import { 
  SyncOutlined,
  FormOutlined,
  FileTextOutlined,
  SettingOutlined,
  BarChartOutlined,
  UserOutlined,
  ClockCircleOutlined,
  CreditCardOutlined,
  ExclamationCircleOutlined,
  TeamOutlined,
  DatabaseOutlined,
  FieldTimeOutlined,
  CalendarOutlined,
  UserSwitchOutlined,
  BellOutlined,
  LogoutOutlined,
  SettingFilled,
  AppstoreOutlined,
  BulbOutlined
} from '@ant-design/icons'

const { Header, Content, Footer, Sider } = Layout

const getMenuItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}

type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
  getMenuItem('Load / Update', 'load', <SyncOutlined />, [
    getMenuItem('Leave Application Management', '1-1', <FormOutlined />),
    getMenuItem('Leave Credits Record Maintenance', '1-2', <CreditCardOutlined />),
    getMenuItem('Leave Without Pay', '1-3', <ExclamationCircleOutlined />),
    getMenuItem('On Leave Employees', '1-4', <TeamOutlined />),
  ]),
  getMenuItem('Process / Posting', 'process', <DatabaseOutlined />, [
    getMenuItem('Generate Transaction Master', '2-1', <FileTextOutlined />),
    getMenuItem('Absences / Tardy / Undertime Posting', '2-2', <ClockCircleOutlined />),
    getMenuItem('Final Posting of Monthly Earned Leave Credit', '2-3', <FieldTimeOutlined />),
  ]),
  getMenuItem('Leave Application', '3', <CalendarOutlined />),
  getMenuItem('Leave Type', '4', <SettingOutlined />),
  getMenuItem('Reports', '5', <BarChartOutlined />),
]

const App = observer(() => {
  const [collapsed, setCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  const handleMenuClick = (info: { key: string }) => {
    const route = menuKeyToRoute[info.key]
    if (route) {
      navigate(route)
    }
  }

  const handleLogout = () => {
    // Add logout logic here
    console.log('Logging out...')
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
      if (window.innerWidth > 768) {
        setCollapsed(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Find the selected key based on current location
  const selectedKey = Object.entries(menuKeyToRoute).find(
    ([_, path]) => location.pathname === path
  )?.[0]

  return (
    <Layout>
      {/* Top Header */}
      <Header className="p-0 bg-white shadow-sm fixed w-full z-10 flex items-center justify-between px-6">
        <div className="flex items-center">
          <img src={logo} alt="DCWD Logo" className="h-10 mr-4" />
          <AppstoreOutlined className="text-xl text-gray-600" />
        </div>
        <div className="flex items-center gap-4">
          {/* Header Icons */}
          <div className="flex items-center gap-6 mr-6">
            <Tooltip title="Settings">
              <SettingFilled className="text-xl text-gray-600 cursor-pointer hover:text-[#896790]" />
            </Tooltip>
            <Tooltip title="Dark Mode">
              <Switch
                checkedChildren={<BulbOutlined />}
                unCheckedChildren={<BulbOutlined />}
                checked={isDarkMode}
                onChange={setIsDarkMode}
                className="bg-gray-300"
              />
            </Tooltip>
            <Tooltip title="Notifications">
              <Badge count={5} size="small">
                <BellOutlined className="text-xl text-gray-600 cursor-pointer hover:text-[#896790]" />
              </Badge>
            </Tooltip>
          </div>
          
          {/* User Section */}
          <div className="flex items-center gap-4">
            <Button 
              icon={<LogoutOutlined className="text-[#896790]" />}
              onClick={handleLogout}
              className="flex items-center gap-2 bg-[#896790]/20 hover:bg-[#896790]/30 border-none"
            >
              <span className="text-[#896790]">Logout</span>
            </Button>
          </div>
        </div>
      </Header>

      <Layout className="mt-16">
        {/* Sidebar */}
        <Sider
          breakpoint="lg"
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          className="bg-white shadow-lg fixed left-0 h-[calc(100vh-64px)]"
          width={240}
          theme="light"
        >
          <div className="flex flex-col h-full">
            {/* User Profile Section */}
            <div className={`p-4 border-b border-gray-200 text-center ${collapsed ? 'hidden' : ''}`}>
              <Avatar 
                size={64} 
                icon={<UserOutlined />} 
                className="bg-[#896790]"
              />
              <div className="mt-2 font-semibold">John Doe</div>
              <div className="text-sm text-gray-500">HR Manager</div>
            </div>

            {/* Menu Section */}
            <Menu 
              mode="inline" 
              defaultOpenKeys={['load', 'process']}
              selectedKeys={selectedKey ? [selectedKey] : []}
              items={items}
              onClick={handleMenuClick}
              className="border-r-0 flex-1"
              styles={{
                item: {
                  '&:active': {
                    backgroundColor: '#896790',
                  },
                  '&.ant-menu-item-selected': {
                    backgroundColor: '#896790 !important',
                  },
                },
              }}
            />
          </div>
        </Sider>

        {/* Main Content */}
        <Layout className="min-h-screen transition-all duration-300" style={{ marginLeft: collapsed ? 80 : 240 }}>
          <Content className="p-6">
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
              <Route
                path="/"
                element={
                  <div className="space-y-4">
                    <h1 className="text-2xl font-bold">Welcome to HR Leave Management</h1>
                    <p className="text-gray-600">Select an option from the menu to get started.</p>
                  </div>
                }
              />
            </Routes>
          </Content>
          <Footer className="text-center bg-white">
            DAVAO CITY WATER DISTRICT © {new Date().getFullYear()} All Rights Reserved.
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  )
})

export default App
