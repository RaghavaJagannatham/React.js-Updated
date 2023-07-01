import React from 'react'
import Addbackupdata from '../DataStorage/AddbackupData'

const Home = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/Addbackup">Add Backup</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/Trailerreadiness">Trailer Readiness</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/Nothers">Others </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/AddBackupData">AddbackupData</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/DashboardPage">DashboardPage</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        {/* <Addbackupdata /> */}
    </div>
  )
}

export default Home