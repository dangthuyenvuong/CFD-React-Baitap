import React, { useState } from "react";
import Button from "../../components/Button";
import TextField from "../../components/TextField";

const Checkout = () => {
  const [form, setForm] = useState({
    userName: "",
    password: "",
    name: "",
    age: "",
    option: "it",
    other: "",
  });

  const [error, setErro] = useState({});
  const [ishide, setHide] = useState(true);
  const [check, setCheck] = useState(false);
  const handelClick = () => setCheck(!check);
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const submit = (ev) => {
    ev.preventDefault();
    let errorObject = {};
    if (!form.userName.trim()) {
      errorObject.userName = "Không được để trống";
    } else if (!emailRegex.test(form.userName)) {
      errorObject.userName = "Vui lòng điền đúng định dạng email";
    }
    if (!form.password) {
      errorObject.password = "Không được để trống";
    } else if (form.password.length < 6 || form.password.length > 32) {
      errorObject.password = "Password phải từ 6-32 ký tự";
    }
    if (!form.confirmpass) {
      errorObject.confirmpass = "Không được để trống";
    } else if (form.password !== form.confirmpass) {
      errorObject.confirmpass = "Password sai";
    }
    if (!form.name) {
      errorObject.name = "Không được để trống";
    } else if (form.name.length < 2) {
      errorObject.name = "Name bắt buộc có 2 ký tự ";
    }
    if (!form.age) {
      errorObject.age = "Không được để trống";
    } else if (Number(form.age) < 18) {
      errorObject.age = "Tuổi phải 18+";
    }
    if (!check) {
      errorObject.check = "Vui lòng check";
    }
    if (!["it", "dev", "other"].includes(form.option)) {
      errorObject.option = "Vui lòng chọn option";
      alert("lỗi");
    }
    if (form.option === "other" && !form.other) {
      errorObject.other = "Vui lòng nhập";
    }
    setErro(errorObject);
    if (Object.keys(errorObject).length === 0) {
      alert("THÀNH CÔNG");
    }
  };
  const _onChange = (name) => (ev) => {
    setForm({
      ...form,
      [name]: ev.currentTarget.value,
    });
  };
  const SelectChange = (e) => {
    setForm({
      ...form,
      option: e.currentTarget.value,
    });
    if (e.currentTarget.value === "other") {
      setHide(false);
    } else {
      setHide(true);
    }
  };
  return (
    <>
      <div className="checkout-page">
        <div className="container">
          <div className="form-wrap">
            <h1>Register</h1>
            <form onSubmit={submit}>
              <TextField
                label="UserName"
                value={form.username}
                onChange={_onChange("userName")}
                placeHoder="Example@gmail.com"
                helperText={error.userName}
              />
              <TextField
                label="Password"
                value={form.password}
                onChange={_onChange("password")}
                placeHoder="Password"
                helperText={error.password}
              />
              <TextField
                label="Confirm Password"
                value={form.confirmpass}
                onChange={_onChange("confirmpass")}
                placeHoder="Confirm Password"
                helperText={error.confirmpass}
              />
              <TextField
                label="Name"
                value={form.name}
                onChange={_onChange("name")}
                placeHoder="Name"
                helperText={error.name}
              />
              <TextField
                label="Age"
                value={form.age}
                onChange={_onChange("age")}
                placeHoder="Age"
                helperText={error.age}
              />
              <input type="checkbox" value={form.check} onClick={handelClick} />
              <label>Bắt buộc</label>
              {error.check && (
                <p
                  className="error-register"
                  style={{ color: "red", display: "block" }}
                >
                  {error.check}
                </p>
              )}
              <div style={{ display: "block" }}>
                <label for="option">Choose option:</label>
                <select name="option" id="cars" onChange={SelectChange}>
                  <option value="it">IT</option>
                  <option value="sav">Saab</option>
                  <option value="dev">Develop</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div hidden={ishide ? true : false}>
                <TextField
                  label="Other"
                  value={form.other}
                  onChange={_onChange("other")}
                  placehoder="other"
                  helperText={error.other}
                />
              </div>{" "}
              <Button style={{ display: "block" }}>Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
