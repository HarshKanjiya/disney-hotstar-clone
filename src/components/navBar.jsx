import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

import { selectUserEmail,selectUserName,selectUserPhoto, setSignOutState, setUserDetails } from '../config/authSlice'
import { app, auth, signInWithGooglePopup } from "../config/firebase";
import { ReactComponent as MainLogo} from '../assets/images/logo.svg';
import { ReactComponent as Home} from '../assets/images/home-icon.svg';
import { ReactComponent as Search} from '../assets/images/search-icon.svg';
import { ReactComponent as Watchlist} from '../assets/images/watchlist-icon.svg';
import { ReactComponent as Orignals} from '../assets/images/original-icon.svg';
import { ReactComponent as Movies} from '../assets/images/movie-icon.svg';
import { ReactComponent as Series} from '../assets/images/series-icon.svg';
import { signOutUser } from "../config/firebase";
import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";




const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dropDown, setDropdown] = useState(false)
  const  userName = useSelector(selectUserName);
  const  userEmail = useSelector(selectUserEmail);
  const  userPhoto = useSelector(selectUserPhoto);

    console.log('userName', userName)
  
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider();

  const handleAuth =()=> {

    signInWithPopup(auth,provider)
    .then(res => 
      {
        console.log('res', res)
        dispatch(setUserDetails({
          name:res.user.displayName,
          email:res.user.email,
          photo:res.user.photoURL
        }))
        
      })
      .catch(err => console.log('err.message', err.message))
      navigate('/home')
 
  }

  const signOutUser =async () => {

    await signOut(auth).then(()=>{
      navigate(-1)
      dispatch(setSignOutState(0))
    })
    setDropdown(false)
  }
  const dropdownhandler = () => {
    setDropdown(!dropDown)
  } 
    return ( 
        <Container>
            <MainLogo style={{height:34}}/>
            <Menu>
            {
              userName ?
            <Tools>
              <ToolWrapper> <Home className="toolsIcon"/> HOME</ToolWrapper>
              <ToolWrapper> <Search className="toolsIcon"/> SEARCH</ToolWrapper>
              <ToolWrapper> <Watchlist className="toolsIcon"/> WATCHLIST</ToolWrapper>
              <ToolWrapper> <Orignals className="toolsIcon"/> ORIGNALS</ToolWrapper>
              <ToolWrapper> <Movies className="toolsIcon"/> MOVIES</ToolWrapper>
              <ToolWrapper> <Series className="toolsIcon"/> SERIES</ToolWrapper>
            </Tools>
            :
            <Tools></Tools>
            }

            {
              auth.currentUser ?
            <UserImg onClick={dropdownhandler} >
              <img src={userPhoto} alt={userName} />
              <DropDown
               className={dropDown ?"dropdownclassVisible":"dropdownclassGone"}  
              onClick={()=>signOutUser()}
              >
                <p>SIGN OUT</p>
              </DropDown>
            </UserImg>
            :
            <Profile onClick={handleAuth} >
            LOGIN
            </Profile>
            
            
            }
            </Menu>
        </Container>
     );
}
 
export default NavBar;

const Container = styled.div`
    width: 100vw;
    height: 9vh;
    background-color: #030114;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    padding: 30px;
    display: flex;

    align-items: center;
`
const Menu = styled.div`
padding: 0 30px;
width: 100%;
display: flex;
justify-content: space-between;
@media (max-width: 786px) {
     margin-right: -30px;
    }
`    
const Tools = styled.div`   
display: flex;
justify-content: flex-start;

gap: 20px;
@media (max-width: 786px) {
      visibility: hidden;
      width: 0;
    }

`
const ToolWrapper = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: max-content;
  align-items: center;
  position: relative;
  gap: 5px;
  font-weight: 300;

  .toolsIcon {
    height: 20px;
  }
  
  &::before{
    content: '';
    width:100%;
    height: 3px;
    background-color: aliceblue;
    position: absolute;
    bottom: -5px;
    left: 3px;
    border-radius: 5px;
    transition: 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform: scaleX(0);
    transform-origin: left center;
}
&:hover{
    &::before{
        transform: scaleX(1);
    }
  }
`;

const Profile = styled.div`
height: 30px;
width: auto;
padding: 5px 10px;
margin: 0 5px;
border: 1px solid gray;
border-radius: 5px;
transition: 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

&:hover{
    background-color: aliceblue;
    color: #030114;
}
`    
const UserImg = styled.div`
position: relative;
img {
  border-radius: 50%;
width: 40px;
height: auto;
}


  .dropdownclassVisible{
    visibility: visible;
  }
  
  .dropdownclassGone{
    visibility: none;
  }


`

const DropDown = styled.div`
position: absolute;
width: max-content;
right:0;
top: 50px;
background-color: transparent;
backdrop-filter: blur(5px);
height: 30px;
border: 1px solid aliceblue;
visibility: hidden;


display: flex;
align-items: center;
justify-content: center;
padding: 0 5px;
border-radius: 7px;

`