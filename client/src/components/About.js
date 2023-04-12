import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import profile from '../images/profile.jpg';

const About = () => {
  const [log,setlog] = useState(false);
  const [userData, setUserData] = useState({});
  const navigation = useNavigate();
  const callAboutPage = async () =>{
    try{
      const res = await fetch('/about', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      
      if(!res.status === 200){
        const error = new Error(res.error);
        throw error;
      }
      else{
        setlog(true);
        setUserData(data);
      }

    }catch(err){
      console.log(err);
      navigation('/login');
    }
  }

  useEffect(()=>{
    callAboutPage();
  }, []);

  const Rndr = () =>{
    return(
      <>
      <section style={{ backgroundcolor: "#eee" }}>
      <div className="container py-5">
        {/* <div className="row">
        <div className="col">
          <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">User</a></li>
              <li className="breadcrumb-item active" aria-current="page">User Profile</li>
            </ol>
          </nav>
        </div>
      </div> */}

        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img src={profile} alt="avatar"
                  className="rounded-circle img-fluid" style={{ width: "150px" }} />
                <h5 className="my-3">{userData.name}</h5>
                <p className="text-muted mb-1">{userData.work}</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                  <button type="button" className="btn btn-primary">Follow</button>
                  <button type="button" className="btn btn-outline-primary ms-1">Message</button>
                </div>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning"></i>
                    <p className="mb-0">https://mdbootstrap.com</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-github fa-lg" style={{ color: "#333333" }}></i>
                    <p className="mb-0">mdbootstrap</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-twitter fa-lg" style={{ color: "#55acee" }}></i>
                    <p className="mb-0">@mdbootstrap</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-instagram fa-lg" style={{ color: "#ac2bac" }}></i>
                    <p className="mb-0">mdbootstrap</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-facebook-f fa-lg" style={{ color: "#3b5998" }}></i>
                    <p className="mb-0">mdbootstrap</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{userData.name}</p>
                  </div>
                </div>
                <hr style={{ width: '50%', textAlign: 'left', marginLeft: '0' }} />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{userData.email}</p>
                  </div>
                </div>
                <hr style={{ width: '50%', textAlign: 'left', marginLeft: '0' }}></hr>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Phone</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{userData.phone}</p>
                  </div>
                </div>
                <hr style={{ width: '50%', textAlign: 'left', marginLeft: '0' }}></hr>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Mobile</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0"></p>
                  </div>
                </div>
                <hr style={{ width: '50%', textAlign: 'left', marginLeft: '0' }}></hr>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            <Tabs
              defaultActiveKey="home"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="Home">
                {/* <Sonnet /> */}
                <div className="row">
                  <div className="col-md-6">
                    <label>User Id</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData.name}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Name</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData.name}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Email</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData.email}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Phone</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData.phone}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Profession</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData.work}</p>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="profile" title="Profile">
                {/* <Sonnet /> */}
                <div className="row">
                  <div className="col-md-6">
                    <label>Experience</label>
                  </div>
                  <div className="col-md-6">
                    <p>Expert</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Hourly Rate</label>
                  </div>
                  <div className="col-md-6">
                    <p>10$/hr</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Total Projects</label>
                  </div>
                  <div className="col-md-6">
                    <p>230</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>English Level</label>
                  </div>
                  <div className="col-md-6">
                    <p>Expert</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Availability</label>
                  </div>
                  <div className="col-md-6">
                    <p>6 months</p>
                  </div>
                </div>
              </Tab>
              {/* <Tab eventKey="contact" title="Contact" disabled>
                <Sonnet />
              </Tab> */}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
      </>
    )
  }
  return (<>{log ? <Rndr/>
    
  : <h5>loading</h5> }</>)

}

export default About;