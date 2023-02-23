import React, { useEffect, useState } from 'react';

import axios from 'axios';
import "./ListClass.css";
// import ListSV from "./Components/ListNL";
import { Link } from "react-router-dom";
import { Button, Modal } from 'antd';
// import "../table.scss"
import styled from "styled-components";
const ListClass= () => {

const [dataList,setDataList]=useState([]);
// axios('http://apikfood.kaviet.vn:5000/api/kfood/v1',)

 const tokenT= localStorage.getItem("token");
 console.log(tokenT);
  useEffect(() => {
    axios.get(`https://apifood.kaviet.vn/api/kfood/v1/viewClassRoom`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
    
    ).then(
      ({ data }) => {
    console.log(data.data)
     setDataList(data.data)
      }
    )
  }, []);

  const [dataListTemp, setDataListTemp] = useState([]);
  const Dele = (id) => {
    const params = new URLSearchParams({
      // id_class

     id_class:id}).toString();
    const url=`https://apifood.kaviet.vn/api/kfood/v1/deleteClassRoom?`+ params
    axios.post(url,{},
    // https://apifood.kaviet.vn/api/kfood/v1/deleteStudent?id_student=${id}`,
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          'Content-Type': 'application/json'
        },
      }
    ).then(
      ({ data }) => {
        console.log(">>>.")
        alert("Xóa thành công")
        // dataList.
        console.log(data)
        //  setDataList(data.data)
      }
    )
  }
  const [formData, setFormData] = useState({
    id_class: "",
    class_name: "",
    id_group:"",
    id_user:""
  });

  const { id_class, class_name,id_group,id_user } = formData;


  const onChange = e => {
    setFormData({
      // if(e.target.name == )

      ...formData,
      [e.target.name]: e.target.value,
      // [formData.id_group]:localStorage.getItem("id")
    });  
    // console.log(formData)
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (id) => {
    setIsModalOpen(true);
    // console.log(id);
    localStorage.setItem("id", id);
    // console.log(">>",localStorage.getItem("id"))
    // const params = new URLSearchParams({
    //   id_class: id
    // }).toString();
    // const url = `https://apifood.kaviet.vn/api/kfood/v1/viewClassRoom?` + params
  //   axios.post(url, {},
  //     // https://apifood.kaviet.vn/api/kfood/v1/deleteStudent?id_student=${id}`,
  //     {
  //       headers: {
  //         accept: 'application/json',
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         'Content-Type': 'application/json'
  //       },
  //     }
  //   ).then(
  //     ({ data }) => {
  //       console.log(">>>.")
  //       //  alert(" thành công")
  //       // dataList.
  //       //  console.log(data)
  //       // setDataStudent(data.data)
  //       //  setDataList(data.data)
  //     }
  //   ).catch((err) => { console.log(err) })
  };

  // ;
  const handleOk = () => {
    setIsModalOpen(false);
    update_Class();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const update_Class = () => {
    const params = new URLSearchParams({
      id_class: formData.id_class,
      class_name: formData.class_name,
      id_group:formData.id_group,
      id_user:formData.id_user,
      // student_name:formData.student_name,
      // id_class:formData.id_class,
      // id_student:formData.id_student
    }).toString();
    const url = `https://apifood.kaviet.vn/api/kfood/v1/updateClassRoom?` + params
    axios.post(url, {},
      // https://apifood.kaviet.vn/api/kfood/v1/deleteStudent?id_student=${id}`,
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          'Content-Type': 'application/json'
        },
      }
    ).then(
      ({ data }) => {
        console.log(">>>.")
        alert("Cập nhật thành công")
        // dataList.
        console.log(data)
        //  setDataList(data.data)
      }
    ).catch(err => console.log(err))
  }

  return (
    <>

<Modal title="Thông Tin Chi Tiết" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {/* {dataListRole.map((item) => {
          return ( */}
            {dataList.map((item) => {
        const id_temp = localStorage.getItem("id")
        return item.id == id_temp ?
          (<>
           {/* {dataList.map(
            (item) => {
              return ( */}
            <Infor_site>
              <Title_infor>Thông tin Chức Vụ</Title_infor>
              <Infor>
                <Left_div>
                  <p>ID Lớp: </p>
                  {/* <label>{dataStudent.id}</label> */}
                  <input
                    type='text'
                    name='id_class'
                    value={id_class}
                    placeholder={item.id}
                    // readOnly={true}
                    onChange={e => onChange(e)}
                    // onChange={this.onChange}
                    style={{ width: "150px" }}
                  />
 <p>ID Nhóm: </p>
                  {/* <label>{dataStudent.id}</label> */}
                  <input
                    type='text'
                    name='id_group'
                    value={id_group}
                    placeholder={item.id_group}
                    // readOnly={true}
                    onChange={e => onChange(e)}
                    // onChange={this.onChange}
                    style={{ width: "150px" }}
                  />

                </Left_div>
                <Right_div>
                  <p>Tên Lớp: </p>
                  <input
                    type='text'
                    name='class_name'
                    placeholder={item.class_name}
                    onChange={e => onChange(e)}
                    // onChange={this.onChange}
                    style={{ width: "150px" }}
                  />
 <p>ID User: </p>
                  {/* <label>{dataStudent.id}</label> */}
                  <input
                    type='text'
                    name='id_user'
                    value={id_user}
                    placeholder={item.id_user}
                    // readOnly={true}
                    onChange={e => onChange(e)}
                    // onChange={this.onChange}
                    style={{ width: "150px" }}
                  />
                </Right_div>
              </Infor>
            </Infor_site>
               </>
               ) : ("")
     
           })}

      </Modal>
   
      <div className='Container'>
        <div className='text_center'>
          <h1 id='qlsv'>Quản Lý Lớp Học</h1>
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
          <Link to='/home/manage-class/add'
            className='btn btn-primary data'>
            <span className='fa fa-file-import'></span>&nbsp; Thêm Lớp Học
          </Link>
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <table className='table--container'>
        {/* <tr className='TT'>
          <td colSpan="5"> QUẢN LÝ TIN XE CỘ  </td></tr> */}
        <tbody>
          <tr className='thea'>
            {/* <td className='header-text'>STT</td> */}
            <td className='header-text'>ID Nhóm Lớp Học</td>
            <td className='header-text'>Tên Nhóm Lớp Học</td>
          
            <td className='header-text'>Xử  Lý</td>
          </tr>

          {dataList.map(
            (group) => {
              return (

                   <tr >
                  {/* <td > {1}</td> */}
                  <td>{group.id}</td>
                  <td> 
                  <a onClick={() => showModal(group.id)}>

                              <span>{group.class_name}  </span>
                            </a></td>
                  <td style={{ textAlign: 'center' }}>
                    <button
                      onClick={() => Dele(group.id)}
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

export default ListClass;

const Infor_site = styled.div`
  background-color: white;
  padding: 2rem 3rem;
  width: 100%;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2),
    8px 8px 8px 8px rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  background-color: whitesmoke;
`;
const Infor = styled.div`
  display: flex;
  // width:500px
`;
const Left_div = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  max-width: 35%;
`;
const Right_div = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  max-width: 35%;
  margin-left: 2rem;
`;
const Image_div = styled.div`
  padding-top: 30px;
`;
const Title_infor = styled.p`
  font-size: 2.5rem;
  width: 60%;
  margin: auto;
  padding-bottom: 20px;
  text-align: center;
  font-weight: bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  // text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
  //   0px -4px 10px rgba(255, 255, 255, 0.3);
`;
const Title_gpa = styled.p`
  font-size: 2.5rem;
  // width: 50%;
  // margin: auto;
  padding-bottom: 20px;
  font-weight: bold;
  //text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  // text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
  //   0px -4px 10px rgba(255, 255, 255, 0.3);
`;
const Gpa_site = styled.div`
  // border: 1px solid black;
  background-color: whitesmoke;
  border-radius: 10px;
  width: 40%;
  padding: 2rem 3rem;
  margin-left: 5%;
  height: 50vh;
  align-items: center;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2),
    8px 8px 8px 8px rgba(0, 0, 0, 0.19);
  text-align: center;
`;
const Site = styled.div`
  display: flex;
  margin-top: 10%;
`;
const Btn_site = styled.div`
  position: static;
  margin-top: 5vh;
  text-align: center;
`;
