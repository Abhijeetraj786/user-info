import React from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {useEffect} from 'react';
import { listUsers, userDetails } from './Actions/userActions';
import LoadingBox from './components/LoadingBox';
import MessageBox from './components/MessageBox';
import { USER_DETAILS_RESET } from './Constants/UserConstants';
function App() {
  const dispatch=useDispatch();
  const {loading,error,users}=useSelector((state)=>state.userList)
  const {loading:load,error:err,success,user}=useSelector((state)=>state.userDetails)
  useEffect(()=>{
    dispatch(listUsers());
  },[dispatch]);
  return (
    <div className='grid'>
      <header >
      <h1>
      User Info
      </h1>
      </header>
      <main>
      {
        loading?<LoadingBox/>:
        error?(<MessageBox variant= "danger">{error}</MessageBox>):<>
        <div className="card">
        {load?<LoadingBox/>:err?(<MessageBox variant= "danger">{error}
        </MessageBox>):success?(<>
          <div>
         <img src={user.avatar} alt={`${user.first_name} pic`}/>
        </div>
        <div className='body'>
         <div><h3>{`${user.first_name} ${user.last_name}`}</h3></div>
         <div><strong>Email:</strong> {user.email}</div>
        </div>
        <div>
        <button onClick={()=>(dispatch({type:USER_DETAILS_RESET}))}>X</button>
        </div>
        </>):" "}
        </div>
       
        <div className="user-list">
          {
            users.map((user)=>(
              <div key={user.id} >
                <button onClick={()=>(dispatch(userDetails(user.id)))}>{user.id}</button>
              </div>
            ))
          }
        </div>
        </>

        
      }
      </main>
      <footer>All copyrights reserved.</footer>
    </div>
  );
}

export default App;
