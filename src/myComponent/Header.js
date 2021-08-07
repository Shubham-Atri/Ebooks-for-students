import React from 'react';

export const Header = () => {
    let iconStyle = {
        fontSize: '30px',
        color: 'lightslategray',
        padding:'2px'
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <i className="material-icons" style={iconStyle}>school </i>
                    <a className="navbar-brand" href="/">Electropedia</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>
            <div className="my-2 text-center  fs-2">Here you will get free Ebooks for Bsc(hons.) Electronics. <br />
            Just click on the subject name and Enjoy Studying !!
            </div>
            
        </>
    )
}

