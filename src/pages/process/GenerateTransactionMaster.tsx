import React from 'react';
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import type { TableColumnsType, TableProps } from 'antd';
const GenerateTransactionMaster = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-[#896790]">Leave - Process / Posting - Generate Transaction Master</h1>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg font-medium">
            Items Lgbggfbfgbfssssejiewormxmnjcbajsbdnjkandjkasbdbhasdjbasjkdnaksnd
          </div>
          <Space size="middle">
            <Input
              placeholder="Search"
              prefix={<SearchOutlined className="text-gray-400" />}
              className="w-64"
            />
            <Button
              type="primary"
              icon={<PlusOutlined />}
              className="bg-[#896790] hover:bg-[#896790]/80"
            >
              CREATE
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default GenerateTransactionMaster
