import { useState } from 'react';
import './App.css';
import Button from './components/button';
import Checkbox from './components/checkbox';
import Input from './components/input';
import Select from './components/select';

function App() {

  const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  
  const passRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  
  
  const [formValue, setFormValue] = useState({
    username: '',
    password: '',
    age: ''
  })
  const {username, password, age, rePassword, select} = formValue 
  
  const [textActive, setTextActive] = useState(false)

  const [checkbox, setCheckbox] = useState(false)
  const [checkbox2, setCheckbox2] = useState(false)

  const [error, setError] = useState({})
  
  const selectChange= function(ev) {
    setFormValue({...formValue, select: ev.currentTarget.value})

      if(ev.currentTarget.value === 'Other'){
        setTextActive(true)
      }else{
        setTextActive(false)
      }
  
  }
  const submit = () => {
    let objError = {}

    if(!username.trim()){
      objError.username = 'Giá trị không được bỏ trống'
    }else if(!emailRegexp.test(username)){
      objError.username = 'Giá trị phải là 1 email chính xác'
    }

    if(!formValue.password.trim()){
      objError.password = 'Giá trị không được bỏ trống'
    }else if(!passRegexp.test(formValue.password)){
      objError.password = 'Giá trị phải là 1 email chính xác'
    }

    if(formValue.rePassword !== formValue.password){
      objError.rePassword = 'Mật khẩu không trùng khớp'
    }

    if(!formValue.age.trim() && formValue.age < 18){
      objError.age = 'Bé cần phải lớn hơn 18 chủi'
    }

    if(!checkbox && !checkbox2 ){
      objError.all = 'vui lòng xác nhận trước khi submit'
    }else if(!checkbox){
      objError.all = 'vui lòng đọc lại quy định và chọn yes'
    }

    setError(objError)
  }

  const modifyCheckbox = () =>{
    if(checkbox){
      setCheckbox(false)
      setCheckbox2(true)
    }else{
      setCheckbox2(false)
      setCheckbox(true)
    }
  }

  return (
    <div className="App">
      <h1>Register Form</h1>
      <form>
      <Input label='Username' placeholder='Username' size='large'value={username} error={error.username} onchange={(ev) => setFormValue({...formValue, username: ev.currentTarget.value})}></Input>
      <Input label='Password' text='password' placeholder='Password' size='large'value={formValue.password} error={error.password} onchange={(ev) => setFormValue({...formValue, password: ev.currentTarget.value})}></Input>
      <Input label='Confirm password' text='password' placeholder=' Confirm password' size='large' error={error.rePassword} onchange={(ev) => setFormValue({...formValue, rePassword: ev.currentTarget.value})}></Input>
      <Select onchange={selectChange} textActive={textActive}/>
      <Input label='Age' size='medium' error={error.age} onchange={(ev) => setFormValue({...formValue, age: ev.currentTarget.value})}></Input>
      <Checkbox value='yes' onclick={modifyCheckbox} checked={checkbox}/>
      <Checkbox value='no' onclick={modifyCheckbox} checked={checkbox2}/>
      <p>{error.all}</p>
      <Button color='colored' onclick={submit}>Submit</Button>
      </form>
    </div>
  );
}

export default App;
