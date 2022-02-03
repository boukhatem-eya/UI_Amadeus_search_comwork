import React from 'react';
import 'antd/dist/antd.css';
import { Table} from 'antd';


function ListBillets({billets}){

const columns = [
  {
    title: 'departure',
    dataIndex: '0',
    key: '0',
  },
  {
    title: 'arrival',
    dataIndex: '1',
    key: '1',
  },
  {
    title: 'price',
    dataIndex: '2',
    key: '2',
  },
  {
    title: 'vclass',
    dataIndex: '3',
    key: '3',
  },
];


return(<Table columns={columns} dataSource={billets} />)
}
export default ListBillets;