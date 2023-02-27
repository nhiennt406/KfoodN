import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import CallApi from "../../API/CallApi";
import axios from "axios";
import { API_URL } from "../../API/Config";
const AddForm = () => {
  const [formData, setFormData] = useState({
    student_name: "kk",
    student_birthday: "",
    student_gender: ""
  });
  var bdT="" ;
  const { student_name, student_birthday, student_gender } = formData;
  const onChange = e => {
    setFormData({
      // if(e.target.name == )
      
      ...formData,
      [e.target.name]: e.target.value,
      
    });
    // console.log(formData)
  };
 bdT= formData.student_birthday.split('-').join('')
//  console.log("Test BD",bdT)
  const params = new URLSearchParams({
    student_birthday:formData.student_birthday.split('-').join(''),
    student_gender:formData.student_gender,
    student_name:formData.student_name}).toString();
  const url=`https://apifood.kaviet.vn/api/kfood/v1/createStudent?`+ params
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
      alert("Them thanh cong");
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
        <Link to="/home/manage-student" className="btn btn-danger">
          <span className="fa fa-arrow-left"></span> &nbsp; Quay lại
        </Link>
      </div>
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 center">
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">Thêm Học Sinh</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={e => onSubmit(e)}>
              <div className="form-group">
                <label>Họ và tên: </label>
                <input
                  type="text"
                  className="form-control"
                  required
                  name="student_name"
                  value={student_name}
                  onChange={e => onChange(e)}
                />
                <label>Ngày sinh: </label>
                <input
                  type="date"
                  className="form-control"
                  required
                  name="student_birthday"
                  value={student_birthday}
                  onChange={e => onChange(e)}
                />
                <label>Giới tính:</label>
                <select
                  className="form-control"
                  name="student_gender"
                  required
                  value={student_gender}
                  onChange={e => onChange(e)}
                >
                  <option>--Select--</option>
                  <option value="1">Nam</option>
                  <option value="2">Nữ</option>
                </select>

                <div className="text_center">
                  <button
                    type="submit"
                    className="button submit btn btn-primary"
                    onClick={(e) => onSubmit(e)}
                  // onClick={() => Them(this.state.group_name)}
                  >
                    <span className="fa fa-plus"></span> &nbsp;Lưu lại
                  </button>{" "}
                  &nbsp;
                  <Link
                    to="/home/manage-student"
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
