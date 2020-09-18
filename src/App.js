import React, { Component } from 'react'

export default class App extends Component {
   
  render() {
    
    return (
      <div className='grid-container'>
      <header>
        <div className="left-side">
          <img src="/asset/logo.svg"></img>
          <ul className="menu">
                <li>Program
                  <ul className="program">
                    <li>program 1</li>
                  </ul>
                </li>
                <li>Artikel</li>
                <li>Tentang Kami</li>
                <li>Kolaborasi</li>
                <li>Bantuan
                  <ul className="bantuan">
                      <li>bantuan 1</li>
                  </ul>
                </li>
          </ul>
        </div>
        <div className="right-side">
          <button className="button">Masuk</button>
          <button className="button primary">Daftar</button>
        </div>
      </header>
      <main>
         <section className="banner">
            <div className="banner-content">
              <div className="breadCrumb">
                  <div>Home</div>
                  <div className="dropdown">
                        <input className="arrow" type="submit" value=">"/>
                        <div className="dropdown-content">
                          <a href="#">Kolaborasi</a>
                        </div>
                  </div>
              </div>
              <div className="description">
                <span>Ayo Kolaborasi</span>
                <p>Mari beri kontribusi terbaik dalam meningkatkan kualitas sumber daya manusia Indonesia dalam mengembangkan UMKM 
                  dengan menjadi <font>Mitra LatihID.</font>
                </p>
              </div>
            </div>
         </section>
         <section className="advantage-session">
            <div className="advantage-title">
              <p>Keuntungan Menjadi Minta Kami</p>
            </div>
            <div className="advantage-container">
              <div className="box1">
                    <div className="icon">
                      <img src='/asset/business.svg'></img>
                    </div>
                    <div className="box-text">
                      <div>Jejaring Bisnis</div>
                      <div>Kesempatan untuk menjangkau <span>865</span> pengguna Kami</div>
                    </div>
              </div>
              <div className="box2">
                <div className="icon">
                    <img src='/asset/carbon-money.svg'></img>
                </div>
                <div className="box-text">
                  <div>Insentif</div>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut pellentesque elit tellus feugiat malesuada faucibus.</div>     
                </div>
              </div>
              <div className="box3">
                <div className="icon">
                    <img src='/asset/laptop-house.svg'></img>
                </div>
                <div className="box-text">
                  <div>Pengalaman</div>
                  <div>Berbagi cerita, motivasi, dan pengalaman menarik dengan menjadi pembicara pada LatihID Talks maupun PETA</div>
                </div>
              </div>
              <div className="box4">
                <div className="icon">
                    <img src='/asset/sertificate.svg'></img>
                </div>
                <div className="box-text">
                  <div>Sertifikat</div>
                  <div>Dokumentasi sebagai pembicara 
                    dalam acara LatihID</div>   
                </div>  
              </div>
            </div>
         </section>
         
         <section className="partner-container">
             <p>Jenis Jenis Kemitraan</p>
             <div className="typeOf-partner">
                <div>
                  <img src="/asset/chatting-person.svg"></img>
                  <h1>Pemateri Modul</h1>
                  <p>Individu/Lembaga bermitra sebagai instruktur atau pemateri di latihID Modul, dengan menyediakan beberapa courses di dalam satu modul pembelajaran.</p>
                </div>
                <div>
                  <img src="/asset/talk.svg"></img>
                  <h1>Pembicara Talks</h1>
                  <p>Individu/Lembaga bermitra sebagai instruktur atau pemateri di latihID Talks, yang membahas topik seputar UMKM melalui webinar live atau tatap muka yang interaktif.</p>
                </div>
                <div>
                  <img src="/asset/circle-connect.svg"></img>
                  <h1>Pembicara Peta</h1>
                  <p>Individu/Lembaga bermitra sebagai instruktur atau pemateri di latihID PETA, yang menceritakan pengalaman tentang UMKM dalam video singkat.</p>
                </div>
                <div>
                  <img src="/asset/handshake.svg"></img>
                  <h1>Pembicara Lainnya</h1>
                  <p> Individu/Lembaga dapat mengajukan berbagai jenis kemitraan lainnya, seperti Media partner.</p>
                </div>
            </div>
         </section>

         
         <section className="form-container">
           <div className="form-header">
             <h1>Ayo Kolaborasi</h1>
             <p>Silakan isi dan lengkapi data berikut ini.LatihID akan segera <span>menghubungi Anda!</span></p>
           </div>
           <div className="form-content">
                <div className="left-form">
                  <ul>
                    <li>
                      <label>Kerjasama yang diinginkan</label>
                      <select className="select">
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                      </select>  
                    </li>
                    <li>
                      <label>Nama</label>
                      <input type="text"></input>
                    </li>
                    <li>
                      <label>Email</label>
                      <input type="email"></input>
                    </li>
                    <li>
                      <label>Nomor Telepon</label>
                      <input type="text"></input>
                    </li>
                  </ul>     
                </div>
                <div className="right-form">
                  <ul>
                    <li>
                      <label>Upload CV</label>
                      <div className="upload-custom">
                        <button className="btn">Choose File</button>
                        <input type="file"></input>
                        <label>No file chosen</label>
                      </div>
                    </li>
                    <li>
                      <label>Upload Portfolio atau Proposal Kerjasama</label>
                      <div className="upload-custom">
                        <button className="btn">Choose File</button>
                        <input type="file"></input>
                        <label>No file chosen</label>
                      </div>
                    </li>
                    <li>
                      <label>Topik yang diajukan</label>
                      <textarea cols="30" rows="3"></textarea>
                    </li>
                  </ul>  
                </div>
           </div>
           <div className="form-button">
              <button className="button primary">Kirim</button>
           </div>
         </section>
      </main>
    </div>
    )
  }
}
