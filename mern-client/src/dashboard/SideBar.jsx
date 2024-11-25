import React from 'react'
import { Sidebar } from "flowbite-react";
import { HiChartPie, HiOutlineCloudUpload, HiUser } from "react-icons/hi";
export const SideBar = () => {
  return (
    <Sidebar aria-label="Sidebar with content separator example">
    
    <Sidebar.Logo className='text-2xl'>
        <p>Admin Dashboard</p>
    </Sidebar.Logo>

    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item href="/" icon={HiChartPie}>
          Home Page
        </Sidebar.Item>
        
        <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
          Upload a Book
        </Sidebar.Item>
        <Sidebar.Item href="/admin/dashboard/manage" icon={HiUser}>
          Manage Books
        </Sidebar.Item>
        <Sidebar.Item href="/admin/dashboard/orders" icon={HiShoppingCart}>
            View Orders
          </Sidebar.Item>
      </Sidebar.ItemGroup>
      
    </Sidebar.Items>
  </Sidebar>
  )
}
