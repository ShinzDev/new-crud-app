import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { updateUser } from '../redux/userSlice'


const Update = () => {
    const {id} = useParams()
    const users = useSelector((state)=>state.users)
    const existingUsers = users.filter(user=>user.id == id)
    const {name,email} = existingUsers[0]
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [updateName, setUpdateName] = useState(name)
    const [updateEmail, setUpdateEmail] = useState(email)

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUser({
            id: id,
            name: updateName,
            email: updateEmail,
        }))
        navigate('/')
    }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
    <div className="shadow w-50 bg-light p-5">
      <form onSubmit={handleUpdate}>
        <h3 className="text-center">Update user</h3>
        <div>
          <label htmlFor="updateUser">Update Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your updated name"
            value={updateName}
            onChange={(e) => setUpdateName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="mt-3">Update Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your updated email"
            value={updateEmail}
            onChange={(e) => setUpdateEmail(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100 my-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  </div>
  )
}

export default Update