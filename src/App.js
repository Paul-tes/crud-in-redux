import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, updateUserName } from './redux/features/Users';
import { useState } from 'react';

function App() {
  const userList = useSelector((state) => state.users.value)
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [userName, setUserName] = useState("")
  const [newUserName, setNewUserName] = useState("")
  return (
    <div className="App">
      { console.log(userList) }
      <div className="addUser">
        <input
        type="text"
        placeholder='Name'
        onChange={(e) => {
          setName(e.target.value);
        }}
        />
        <input type="text"
        placeholder='User Name'
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        />
        <button
        onClick={() => {
          dispatch(addUser({
            id: userList[userList.length - 1].id + 1,
            name,
            userName
            })
            );
          }}
          >
            Add User
          </button>
      </div>
      <div className='displayUsers'>
        {userList.map((user) => {
          return (
            <div className='userItem'>
              <h1>{user.name}</h1>
              <h2>{user.userName}</h2>
              <input
                type="text"
                placeholder='New User Name'
                onChange={(e) => {
                  setNewUserName(e.target.value);
                }}
              />
              <button
              className='btn-update'
              onClick={() => dispatch(updateUserName({id: user.id, userName: newUserName}))}
              >
                Update
              </button>
              <button
              className='btn-delete'
              onClick={() => {
                dispatch(deleteUser({id: user.id}))
              }}
              >
                Delete
              </button>
            </div>
            )
            
        })}
      </div>
    </div>
  );
}

export default App;
