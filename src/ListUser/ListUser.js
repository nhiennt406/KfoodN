import React, { useEffect, useState } from 'react';

import axios from 'axios';
import "./ListUser.css";
// import ListSV from "./Components/ListNL";
import { Link } from "react-router-dom";

// import "../table.scss"
const ListUser = () => {

const [dataList,setDataList]=useState([]);
// axios('http://apikfood.kaviet.vn:5000/api/kfood/v1',)
 const dataListGroups=[
  {
    id_group:"1",
    ten_group:"Nhom hoc buoi chieu",
  
  }
 ]
 const tokenT= localStorage.getItem("token");
 console.log(tokenT);
  useEffect(() => {
    axios.get(`http://apikfood.kaviet.vn:5000/api/kfood/v1/showAllUser`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
    
    ).then(
      ({ data }) => {
    //  console.log(data)
     setDataList(data.data)
      }
    )
  }, []);

console.log(dataList)
  // const item={};
  const [dataListTemp, setDataListTemp] = useState([]);

  return (
    <>

     
   
      <div className='Container'>
        <div className='text_center'>
          <h1 id='qlsv'>Quản Lý Người Dùng</h1>
        </div>
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          &nbsp;
          <div className='dropdown'>
            <button
              type='button'
              className='btn dropdown-toggle'
              id='dropdownMsv'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='true'>
              Nhóm &nbsp; <span className='fa fa-caret-square-o-down'></span>
            </button>
            <ul className='dropdown-menu' aria-labelledby='dropdownMenu1'>
              {/* {lop.map((item) => (
                <li
                  to='/home/list-students'
                  key={item}
                  onClick={() => this.ChooseClass(item)}>
                  <a role='button'>{item}</a>
                </li>
              ))} */}
            </ul>
          </div>
          <label
            style={{
              paddingTop: "8px",
              paddingBottom: "2px",
              marginRight: "10px",
            }}>
            {sessionStorage.getItem("item")}
          </label>
       
          &nbsp;
       
          &nbsp;
          <Link to='/home/manage-user/add'
            className='btn btn-primary data'>
            <span className='fa fa-file-import'></span>&nbsp; Thêm Người Dùng
          </Link>
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <table className='table--container'>
       
        <tbody>
          <tr className='thea'>
            {/* <td className='header-text'>STT</td> */}
            <td className='header-text'>ID Chức Vụ</td>
            <td className='header-text'>ID Người Dùng</td>
            <td className='header-text'>Tên Chức Vụ</td>
            <td className='header-text'>User Name</td>
            <td className='header-text'>Xử  Lý</td>
          </tr>
          {dataList && dataList.map(
            (group,index) => {
              return (
                   <tr  key={index}>
                  {/* <td > {1}</td> */}
                  <td>{group.id_role}</td>
                  <td> {group.id} </td>
                  <td> {group.role_name} </td>
                  <td> {group.user_name} </td>
                  <td style={{ textAlign: 'center' }}>
                    <button
                      // onClick={() => Dele(_id)}
                    >
                      Xóa
                    </button>
                  </td>

                </tr>)
             })}
        </tbody>
      </table>

            </div>
          </div>
        </div>
      </div>

  

     
   

    </>

  );
};

export default ListUser;
