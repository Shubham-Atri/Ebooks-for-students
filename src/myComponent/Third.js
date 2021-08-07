import React from 'react'

export const Third = () => {
    return (
        <div className="my-3">
            <h2 textDecoration="underline"><span className="badge bg-secondary">3rd Year:</span></h2>
            <div className="accordion " id="accordionExample">
                <div className="accordion-item bg-dark bg-gradient">
                    <h2 className="accordion-header bg-dark bg-gradient" id="headingFive">
                        <button className="accordion-button collapsed bg-dark bg-gradient text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Fifth Semester
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <dt><a href="https://www.pdfdrive.com/download.pdf?id=176171206&h=297e7d12b2b64441cd929082982020db&u=cache&ext=pdf" target="_blank" rel="noreferrer">Microprocessor and Microcontrollers</a></dt>
                            <dt><a href="http://fac.ksu.edu.sa/sites/default/files/computer_networks_4th_ed_andrew_s._tanenbaum_prentice_hall.pdf" target="_blank" rel="noreferrer">Computer Networks (Book 1)</a></dt>
                            <dt><a href="https://www.pdfdrive.com/download.pdf?id=200721151&h=3df5e1e3c1d82f75afd6f9c269905c5a&u=cache&ext=pdf" target="_blank" rel="noreferrer">Computer Networks (Book 2)</a></dt>
                            <dt><a href="https://www.pdfdrive.com/download.pdf?id=184804873&h=49800c9b5dd122d4452f14cee6b5b620&u=cache&ext=pdf" target="_blank" rel="noreferrer">Electromagnetics</a></dt>
                            <dt><a href="https://www.pdfdrive.com/download.pdf?id=162127946&h=7b2f53f6756fea6803a75063f5df4751&u=cache&ext=pdf" target="_blank" rel="noreferrer">Digital Signal Processing (Book 1)</a></dt>
                            <dt><a href="https://www.pdfdrive.com/download.pdf?id=7267576&h=8f7caad7b1e5967508d60746b2c385bf&u=cache&ext=pdf" target="_blank" rel="noreferrer">Digital Signal Processing (Book 2)</a></dt>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-dark bg-gradient">
                    <h2 className="accordion-header bg-dark bg-gradient" id="headingSix">
                        <button className="accordion-button collapsed bg-dark bg-gradient text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            Sixth Semester
                        </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                        <div className="accordion-body text-light">
                            <b>THIS SEMESTER IS NOT UPDATED</b>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}
