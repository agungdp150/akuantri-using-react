import React, { Component } from 'react'


export default class Home extends Component {
  render() {
    return (
      <div>
        <header>
        <nav>
            <img src="https://www.akuantri.com/images/akuantri-logo.png" alt="akuantri-logo" class="logo" width="200px"/>
            <ul class="link-nav">
                <li><a href="#" class="hov"> <span class="homies">Home</span></a></li>
                <li><a href="#" class="hov">Layanan</a></li>
                <li><a href="#" class="hov">FAQ</a></li>
                <li><a href="#" class="hov">Blog</a></li>
                <li><a href="#" class="hov">Tentang Kami</a></li>
                <li><a href="#" class="dftr"><span class="clr"> Daftar Liner </span></a></li>
            </ul>
        </nav>
     </header>
      </div>
    )
  }
}
