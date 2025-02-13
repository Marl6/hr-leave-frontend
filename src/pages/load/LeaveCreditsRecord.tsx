import React from 'react';
  import { Table, Input, Button, Space } from 'antd';
  import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
  import type { TableColumnsType, TableProps } from 'antd';

  interface DataType {
    key: React.Key;
    dateApplied: Date;
    Employee: string;
    typeOfLeave: string;
    leaveDates: Date;
    noOfDays: number;
    reason: string;
    status: string;
    dateApproved: Date;
  }

  const formatDateApproved = (date: Date) => {
    return date.toLocaleString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).replace(',', '');
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: 'Date Applied',
      dataIndex: 'dateApplied',
      sorter: (a, b) => new Date(a.dateApplied).getTime() - new Date(b.dateApplied).getTime(),
      render: (date: Date) => date.toLocaleDateString(),
    },
    {
      title: 'Employee Name',
      dataIndex: 'Employee',
      sorter: (a, b) => a.Employee.localeCompare(b.Employee),
    },
    {
      title: 'Type of Leave',
      dataIndex: 'typeOfLeave',
      sorter: (a, b) => a.typeOfLeave.localeCompare(b.typeOfLeave),
    },
    {
      title: 'Leave Dates',
      dataIndex: 'leaveDates',
      sorter: (a, b) => new Date(a.leaveDates).getTime() - new Date(b.leaveDates).getTime(),
      render: (date: Date) => date.toLocaleDateString(),
    },
    {
      title: 'Number of Days',
      dataIndex: 'noOfDays',
      sorter: (a, b) => a.noOfDays - b.noOfDays,
    },
    {
      title: 'Reason',
      dataIndex: 'reason',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      sorter: (a, b) => a.status.localeCompare(b.status),
    },
    {
      title: 'Date Approved',
      dataIndex: 'dateApproved',
      sorter: (a, b) => new Date(a.dateApproved).getTime() - new Date(b.dateApproved).getTime(),
      render: (date: Date) => formatDateApproved(date),
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      dateApplied: new Date('2024-02-01'),
      Employee: 'John Doe',
      typeOfLeave: 'Sick Leave',
      leaveDates: new Date('2024-02-02'),
      noOfDays: 2,
      reason: 'Flu symptoms',
      status: 'Approved',
      dateApproved: new Date('2024-02-01T09:34:00'),
    },
    {
      key: '2',
    dateApplied: new Date('2024-01-15'),
    Employee: 'Jane Smith',
    typeOfLeave: 'Vacation Leave',
    leaveDates: new Date('2024-01-20'),
    noOfDays: 5,
    reason: 'Family trip',
    status: 'Pending',
    dateApproved: new Date('2024-01-18T10:45:00'),
  },
  {
    key: '3',
    dateApplied: new Date('2024-02-05'),
    Employee: 'Michael Johnson',
    typeOfLeave: 'Maternity Leave',
    leaveDates: new Date('2024-02-10'),
    noOfDays: 30,
    reason: 'Childbirth',
    status: 'Approved',
    dateApproved: new Date('2024-02-07T14:20:00'),
  },
  {
    key: '4',
    dateApplied: new Date('2024-01-28'),
    Employee: 'Emily White',
    typeOfLeave: 'Emergency Leave',
    leaveDates: new Date('2024-01-30'),
    noOfDays: 1,
    reason: 'Family emergency',
    status: 'Rejected',
    dateApproved: new Date('2024-01-29T08:15:00'),
  },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const LeaveCreditsRecord = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-[#896790]">Leave - Load / Update - Leave Credits Record Maintenance</h1>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg font-medium">
            Items List ({data.length})
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
        <Table<DataType> 
          columns={columns} 
          dataSource={data} 
          onChange={onChange}
          pagination={{
            total: data.length,
            pageSize: 10,
            showSizeChanger: true,
            showTotal: (total) => `Total ${total} items`,
          }} 
        />
      </div>
    </div>
  )
}

export default LeaveCreditsRecord
