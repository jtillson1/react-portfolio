import React from 'react';
import resumeImg from "../../assets/resume.png";
import DownloadLink from "react-download-link";

function Resume() {


    return (
        <section>

            <a href={require("../../assets/resume.pdf")} download>
                <button className="resumeDownload">
                    Download Resume
                </button>
            </a>



            <div className="resumeImg">
                <img src={resumeImg}></img>
            </div>
        </section>
    );
}


export default Resume;