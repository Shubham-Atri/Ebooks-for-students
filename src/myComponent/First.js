import React from 'react'

export const First = () => {
    return (
        <div className="my-3">
            <h2 textDecoration="underline"><span className="badge bg-secondary">1st Year:</span></h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item bg-dark bg-gradient">
                    <h2 className="accordion-header bg-dark bg-gradient" id="headingOne">
                        <button className="accordion-button collapsed bg-dark bg-gradient text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            First Semester
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <dt><a href="https://ushalakshminarayana.files.wordpress.com/2016/08/electical-circuit-analysis-sadiku.pdf" target="_blank" rel="noreferrer">Network Analysis</a></dt>
                            <dt><a href="https://drive.google.com/uc?export=download&id=1wlRT7bnFqD5uocVFMaL7kkTCZd8HHv3M" target="_blank" rel="noreferrer">Mathematical Foundation</a></dt>
                            <dt><a href="https://www.pdfdrive.com/download.pdf?id=157941106&h=2a7ddf4760562bc5169bd3f37a555bec&u=cache&ext=pdf" target="_blank" rel="noreferrer">Ge-Cs-Introduction to Programming</a></dt>
                            <dt><a href="https://www.pdfdrive.com/download.pdf?id=180663309&h=41191927a7d7b5d61399e368145a703b&u=cache&ext=pdf" target="_blank" rel="noreferrer">Ge-Maths-Calculus</a></dt>
                            <dt><a href="https://www.pdfdrive.com/download.pdf?id=53852464&h=d22281c949aae1b3e129649310e51d14&u=cache&ext=pdf" target="_blank" rel="noreferrer">AECC-English</a></dt>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-dark bg-gradient">
                    <h2 className="accordion-header " id="headingTwo">
                        <button className="accordion-button collapsed bg-dark bg-gradient text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Second Semester
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <dt><a href="https://www.pdfdrive.com/download.pdf?id=176909258&h=af0d3ea002ab461dfdfc92bcfad35bc4&u=cache&ext=pdf" target="_blank" rel="noreferrer">Semiconductors Devices</a></dt>
                            <dt><a href="https://www.pdfdrive.com/download.pdf?id=29579234&h=420da72d2cf033b25fed7fefb82f9c82&u=cache&ext=pdf" target="_blank" rel="noreferrer">Applied Physics</a></dt>
                            <dt><a href="https://robot.bolink.org/ebooks/An%20Introduction%20to%20Database%20Systems%208e%20By%20C%20J%20Date.pdf" target="_blank" rel="noreferrer">Ge-Cs-Introduction to Database System</a></dt>
                            <dt><a href="https://www.pdfdrive.com/download.pdf?id=442270&h=92125d9e00e7f471e0c418dd58b014cf&u=cache&ext=pdf" target="_blank" rel="noreferrer">Ge-Maths-Linear Algebra</a></dt>
                            <dt><a href="https://www2.hcmuaf.edu.vn/data/quoctuan/Basics_of_Environmental_Sci%20(Section%201).pdf" target="_blank" rel="noreferrer">AECC-EVS</a></dt>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
        
    )
}
