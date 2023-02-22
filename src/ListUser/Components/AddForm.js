import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import CallApi from "../../API/CallApi";
import axios from "axios";
const AddForm =()=>{
  const [formData,setFormData]=useState({
    user_name:"",
    id_role:"",
    permission:""
  });
  const {user_name,id_role,permission}=formData;
  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
 
  const params = new URLSearchParams({
    user_name: formData.user_name,
    id_role:formData.id_role,
    permission:formData.permission

  
  }).toString();
  const url=`https://apifood.kaviet.vn/api/kfood/v1/createUser?`+ params
  const onSubmit = e => {
    e.preventDefault();
    // createPost(formData);
    // createClassGroup?group_name=test1
    axios.post(url,{},
    
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      }
    ).then((res) => {
      alert("Them thanh congo");
      console.log(res)
    })
      .catch((err) => {
        alert("Them thất bại");
      }
      )
  };
    return (
      <div className="addForm">
        <div className="back">
          <Link to="/home/list-students" className="btn btn-danger">
            <span className="fa fa-arrow-left"></span> &nbsp; Quay lại
          </Link>
        </div>
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 center">
          <div className="panel panel-warning">
            <div className="panel-heading">
              <h3 className="panel-title">Thêm Người Dùng</h3>
            </div>
            <div className="panel-body">
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                  {/* <label>MSV: </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    name="msv"
                    value={this.state.msv}
                    onChange={this.onChange}
                  /> */}
                  <label>Tên Người Dùng: </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    name="user_name"
                    value={user_name}
                    onChange={e=>onChange(e)}
                  />
               
                  <label>Mật Khẩu:</label>
                  <input
                    type="text"
                    className="form-control"
                    // required
                    // name="gpa"
                    // value={this.state.gpa}
                    onChange={e => onChange(e)}
                  />
                  <label> ID Chức vụ: </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    name="id_role"
                    value={id_role}
                    onChange={e => onChange(e)}
                  />   <label>Quyền </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    name="permission"
                    value={permission}
                    onChange={e => onChange(e)}
                  />
                  {/* <label>Số điện thoại:</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    name="phone"
                    value={this.state.phone}
                    onChange={this.onChange}
                  />
                  <label>Địa chỉ: </label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={this.state.address}
                    onChange={this.onChange}
                  />
                  <label>Tổng số tín chỉ: </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    name="sum_of_credits"
                    value={this.state.sum_of_credits}
                    onChange={this.onChange}
                  />
                  <label>GPA: </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    name="gpa"
                    value={this.state.gpa}
                    onChange={this.onChange}
                  />
                  <label>Trạng thái: </label>
                  <select
                    className="form-control"
                    required
                    name="status"
                    value={this.state.status}
                    onChange={this.onChange}
                  >
                    <option>--Select--</option>
                    <option value="Không">Không </option>
                    <option value="Nguy cơ nghỉ học">Nguy cơ nghỉ học</option>
                    <option value="Cảnh báo học vụ">Cảnh báo học vụ</option>
                    <option value="Thiếu tín chỉ">Thiếu tín chỉ</option>
                    <option value="Thiếu học phí">Thiếu học phí</option>
                    <option value="Khen thưởng">Khen thưởng</option>
                  </select>{" "} */}
                  {/* <label>Lớp:</label>
                  <input
                    placeholder="vd: K64-CA-CLC-4"
                    type="text"
                    className="form-control"
                    required
                    name="lop"
                    value={this.state.lop}
                    onChange={this.onChange}
                  />
                  <br /> */}
                  <div className="text_center">
                    <button
                      type="submit"
                      className="button submit btn btn-primary"
                      onClick={(e)=>onSubmit(e)}
                    >
                      <span className="fa fa-plus"></span> &nbsp;Lưu lại
                    </button>{" "}
                    &nbsp;
                    <Link
                      to="/home/list-students"
                      className="button cancle btn btn-primary"
                    >
                      <span className="fa fa-close"></span> &nbsp;Hủy bỏ
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default AddForm;
