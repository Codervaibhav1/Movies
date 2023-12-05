import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import useDarkMode from './DarkLight';
import { useDispatch } from 'react-redux';
import { getSerachData } from '../features/slice/trandingSlice';
import Logo from '../assets/Logo.png'
const Navbar = () => {
    const {mode ,toggleMode} = useDarkMode() 
    const dispacth = useDispatch()
    const navigate = useNavigate()
    const [text , setText] = useState()
 
    const handleSubmit=(e)=>{
      e.preventDefault();
      // console.log('hello')
     dispacth(getSerachData(text))
     setText('')
     navigate('/searchpage')
    }

  return (
    <nav className={`navbar navbar-expand-lg position-sticky z-2 top-0 ${mode === 'dark' ? 'bg-black' : 'bg-light'} shadow-lg`}>
      <div className="container">
        <img id="logo" src={Logo} alt="" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-light rounded-1"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-item-center justify-content-center">
            <li className="nav-item">
              <Link
                to={"/"}
                className={mode === 'dark' ? "nav-link active mx-3 text-light" :"nav-link active mx-3 text-dark"}
                aria-current="page"
                href="#"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/movielist"}
                className={mode === 'dark' ? "nav-link active mx-3 text-light" :"nav-link active mx-3 text-dark"}
                aria-current="page"
                href="#"
              >
                Movie List
              </Link>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              onChange={(e)=> setText(e.target.value)}
              // value={text}
            />
              <button type="submit" className="btn btn-outline-primary">
                Search
              </button>
          </form>
          <h1 onClick={toggleMode} className={`btn ${mode === 'dark' ? ' ms-3 text-warning': ' ms-3 '}`}>{
            mode === "dark" ? <CiLight/> : <MdOutlineDarkMode/>
          }</h1>
        </div>
      </div>
    </nav>
  )
}

export default Navbar