import React, { Component } from 'react'
// import {Link} from "react-router";

export default class FeatureBox1 extends Component {
  render() {
    return (
    <div>
    <section class="background">
    <div class="color-1">
      <div class="text-bcg">
          <h2>Akuantri Indonesia</h2>
          <p>Kami sadar menunggu adalah hal yang membosankan, dan kami juga sadar akan ada banyak waktu terbuang 
            begitu saja karna harus menunggu. Untuk itu, Akuantri hadir untuk membuat waktu berharga Anda
            tidak hilang begitu saja. Kami akan menggantikan antrian Anda, karna kami sadar bahwa 
            Waktu Anda sangat Berharga.</p>
          <div class="green">
            <a href="https://www.akuantri.com/" >
              <img src="https://www.akuantri.com/images/playstore.png"
                  alt="Google-Play" class="google-play" width="200px"/>
                  </a>
            <a href="https://www.akuantri.com/" target="_blank" rel="noopener noreferrer" class="pelajari">
              <h3>PELAJARI <i class="fas fa-arrow-right"></i></h3>
            </a>
        </div>
      </div>
      </div>
    </section>
  </div>
    )
  }
}

{/* export default FeatureBox1; */}
