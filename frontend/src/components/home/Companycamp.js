import React from 'react'
import "../Styles/Companycamp.css";
import Image1 from "../Assets/Company.png";
import Image2 from "../Assets/intern-cc.jpg";
import Image3 from "../Assets/interview-cc.jpg";
import Image4 from "../Assets/review-cc.jpg";
import Image5 from "../Assets/webinar-cc.jpg";

const Companycamp = () => {
    return (
        <div className="container">
          <div className="row justify-content-center mt-5 mb-4">
            <div className="col-lg col-md info-panel">
              <div className="row">
                <div className="col-lg col-md-6 mt-3">
                  <h1 className="head">COMPANY CAMP</h1>
                  <img src={Image1} class="rounded float-start mt-2" alt="FYP" />
                  <p>Memasuki dunia karir profesional tidaklah mudah. Kondisinya, selama belasan tahun mengenyam 
                    pendidikan kita mungkin terbiasa dengan teman sebaya yang belajar dari buku, kurikulum dan guru yang sama.
                    <br/>Sementara didunia kerja, kita dihadapkan dengan persaingan seleksi dengan orang berlatar-belakang yang sangat beragam dan juga permintaan skill yang tinggi.
                    <br/>Untuk itu, melalui company camp ini Aimprove berusaha menyediakan jembatan bagi kalian yang ingin 
                    merasakan pengalaman magang di perusahaan-perusahaan impian kalian tetapi tidak tahu banyak mengenai 
                    syarat, tips, dan apa saja yang dibutuhkan untuk magang.
                    <br/><b>Yuk buruan daftar! (kuota terbatas)</b>
                  </p>
                  <button className="btn btn-secondary btn-md">Register</button>
                </div>
              </div>
            </div>

            <div className="row justify-content-center my-3">
              <h1 className="text-head text-center mt-4">Our Activities</h1>
            <div className="col-12 col-lg-6 col-md-6 mt-5">
              <div className="card mx-auto shadow">
                <div className="card-body ">
                    <img src={Image2} className="act-img text-center card-img" alt="intern" />
                    <p className="card-text text-center">
                    <b>Internship Opportunity</b>
                    </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 col-md-6 mt-5">
              <div className="card mx-auto shadow">
                <div className="card-body ">
                    <img src={Image3} className="act-img text-center card-img" alt="interview" />
                    <p className="card-text text-center">
                    <b>Interview Practice</b>
                    </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 col-md-6 mt-5">
              <div className="card mx-auto shadow">
                <div className="card-body ">
                    <img src={Image4} className="act-img text-center card-img" alt="review" />
                    <p className="card-text text-center">
                    <b>CV & LinkedIn Review</b>
                    </p>
                  </div>
                </div>
            </div>

            <div className="col-12 col-lg-6 col-md-6 mt-5">
              <div className="card mx-auto shadow">
                <div className="card-body ">
                    <img src={Image5} className="act-img text-center card-img" alt="webinar" />
                    <p className="card-text text-center">
                    <b>Webinar with Experts</b>
                    </p>
                </div>
              </div>
            </div>

          </div>

          </div>
        </div>
)
}


export default Companycamp