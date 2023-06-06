import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser } from '../redux/userSlice'

const Home = () => {
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()
    
    const handleDelete = (id) => {
        dispatch(deleteUser({ id }))
    }


  return (
    <div className='container mt-5'>
        <h2 className='text-secondary text-center my-5'>Crud app using redux toolkit</h2>
        <Link to='/create' className='btn btn-success my-3'> Create +</Link>
        <table className='table table-striped'>
            <thead>
                <tr>
                   <th>Id</th> 
                   <th>Name</th> 
                   <th>Email</th> 
                   <th>Action</th> 
                </tr>
                
            </thead>
            <tbody>
               {
                users.map((user) => (
                    <tr key={user.id}>
                    <td>{user.id}</td> 
                    <td>{user.name}</td> 
                    <td>{user.email}</td> 
                    <td>
                     <Link to={`/edit/${user.id}`}className='btn btn-primary '>Edit</Link>
                     <button className='btn btn-danger mx-3' onClick={()=> handleDelete(user.id)}>Delete</button>
                     </td> 
                 </tr>
                ) )
               }
            </tbody>
        </table>
    </div>
  )
}

export default Home