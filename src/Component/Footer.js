import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="foot">
        <div class="grid-foot">
            <div class="foot-box-1">
                <h3>SEKILAS AKUANTRI</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quam quas accusantium
                    exercitationem
                    deserunt ut iste fugiat debitis ipsam aperiam placeat animi sint, officiis sapiente dolorum? Aliquam
                    ipsam reprehenderit temporibus.</p>
            </div>
            <div class="foot-box-2">
                <h3>LNKS</h3>
                <ul>
                    <li><a href="#">Tentang Kami</a></li>
                    <li><a href="#">Promo</a></li>
                    <li><a href="#">Karir</a></li>
                    <li><a href="#">Hubungi Kami</a></li>
                    <li><a href="#">Syarat & Ketentuan</a></li>
                </ul>
            </div>
            <div class="foot-box-3">
                <h3>DOWNLOAD APLIKASI</h3>
                <a href="https://www.akuantri.com/"><img src="https://www.akuantri.com/images/playstore.png"
                        alt="Google-Play" width="250px"/></a>
            </div>
            <div class="foot-box-4">
                <p>&copy <a href="https://www.akuantri.com/">PT. Agung Dwi Putra.</a> All Rights Reserved.</p>
                <p>Jasa Layanan Antri Indonesia - Akuantri</p>
            </div>
            <div class="foot-box-5">
                <a href="#"><i class="fab fa-twitter fa-2x"></i></a>
                <a href="#"><i class="fab fa-facebook fa-2x"></i></a>
                <a href="#"><i class="fab fa-youtube fa-2x"></i></a>
                <a href="#"><i class="fab fa-instagram fa-2x"></i></a>
            </div>
        </div>
     </footer>
     <a href="#" class="message"><i class="fas fa-comment fa-2x"></i></a>
      </div>
    )
  }
}
