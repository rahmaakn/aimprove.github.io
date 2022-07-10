import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import Image from "../Assets/IISMA.png";
import Image1 from "../Assets/FYP.png";
import Image2 from "../Assets/Company.png";
import Image3 from "../Assets/Analythics.png";
import Bima from "../Assets/Bima.jpeg";
import Al from "../Assets/Al.jpeg";
import Enggar from "../Assets/Enggar.jpeg";

function Home() {
  return (
    <div className="container py-1">
      <div className="row justify-content-center mt-5 mb-4">
        <div className="col-lg col-sm info-panel">
          <div className="row">
            <div className="col-lg">
              <h1 className="text-head">Tumbuh Bersama AIMPROVE</h1>
              <div className="text-center">
              <img src={Image3} class="image3" alt="Analythics" />
              </div>
              <p className="text-body">
                Mari kita bentuk masa depan pembelajaran <br /> Bantu orang-orang di seluruh dunia memberdayakan <br /> diri mereka sendiri melalui pengetahuan.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-center fw-bold mt-4">OUR PRODUCT</h2>

      <div className="row justify-content-center">
        <div className="col-lg col-sm our-panel shadow">
          <div className="row  text-center">
            <div className="col-lg-4 col-md-6 mt-4">
              <Link to="/IISMA">
                <img src={Image} class="fluid" alt="IISMA" />
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 mt-4">
              <Link to="/fyp">
                <img src={Image1} class="fluid" alt="FYP" />
              </Link>
            </div>
            <div className="col-lg-4 offset-lg-0 col-md-6 offset-md-3 mt-4">
              <Link to="/COMPANYcamp">
                <img src={Image2} class="fluid" alt="Company" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-center fw-bold mt-4">TESTIMONI</h2>

      <div className="row justify-content-center">
        <div className="col-lg col-sm testi-panel">
          <div className="row g-3">
            <div className="col-12 col-lg-4 col-md-6 mt-5">
              <div className="card mx-auto shadow bima">
                <img src={Bima} className="card-img-top" alt="Bima" />
                <div className="card-body">
                  <p className="card-text text-center">
                    "Pertukaran pelajar di UL (University Of Limerick) ini sangat life changing karena mendapatkan banyak wawasan, budaya, membuka pandangan dan pikiran serta mendapat banyak teman-teman baru. I wouldn't trade anything for
                    this experience"
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 mt-5">
              <div className="card mx-auto shadow Al">
                <img src={Al} className="card-img-top" alt="Al" />
                <div className="card-body">
                  <p className="card-text text-center">
                    “Seneng banget dapet pengalaman baru pastinya, ketemu orang-orang hebat yang punya passion yang sama. Kegiatan MSIB ini membantu banget dalam menunjang kemampuan individu dan menerapkan secara nyata. ”
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 offset-lg-0 col-md-6 offset-md-3 mt-5">
              <div className="card mx-auto shadow Enggar">
                <img src={Enggar} className="card-img-top" alt="Enggar" />
                <div className="card-body">
                  <p className="card-text text-center">
                    “(Manfaat yang saya dapatkan selama IISMA, red) adalah knowledge, experience, and network. Seperti yang dijelaskan oleh Zalfa dan Yosua tadi. Kalau knowledge ini kita belajar mata kuliah interdisipliner ini kapan lagi
                    begitu. Dan semuanya ini, ketiga manfaat ini, bisa dipakai untuk membangun prospek karier,”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
