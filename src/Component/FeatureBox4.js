import React, { Component } from 'react'

export default class FeatureBox4 extends Component {
  render() {
    return (
      <div>
     <section class="box2">
     <div class="text-head">
      <h2>Testimonial</h2>
      <hr/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid impedit dolore saepe odit, accusamus
          modi eaque provident quisquam omnis odio rerum fuga nam incidunt temporibus doloribus sunt inventore
          veniam necessitatibus?</p>
      <div class="testimonial-cust">
          <i class="fas fa-arrow-right" id="nextBtn"></i>
          <i class="fas fa-arrow-left" id="prevBtn"></i>
          <div class="script-testimonial">

              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt="people-1" width="350px"/>

              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt="people-2" width="350px"/>

              <img src="https://images.unsplash.com/photo-1498387727476-b30055b2ef21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt="people-3" width="350px"/>

              <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt="people-4" width="350px"/>
          </div>
      </div>
      </div>
      </section>
      </div>
    )
  }
}
