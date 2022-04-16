import React from 'react'

const Services = () => {
  return (
    <div>
      <div className='subscrise'>
        <h2>Subscrise To Our Newsletter</h2>
        <div className="input">
          <input type="email" placeholder='Enter email'/>
          <button>Subscrise</button>
        </div>
      </div>

      <div className="services">
        <div className="prices">
          <h3 className='h3_tag'>Services</h3>

          <div className="design">
            <h3>Website Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ducimus earum? Eligendi, dolores ipsum eum eveniet suscipit eaque vitae sed!</p>
            <p>Pricing: $1,000-$3,000</p>
          </div>

          <div className="maintenance">
            <h3>Website Maintenance</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ducimus earum? Eligendi, dolores ipsum eum eveniet suscipit eaque vitae sed!</p>
            <p>Pricing: $250 per month</p>
          </div>

          <div className="hosting">
            <h3>Website Hosting</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ducimus earum? Eligendi, dolores ipsum eum eveniet suscipit eaque vitae sed!</p>
            <p>Pricing: $2,000-$4,000</p>
          </div>
        </div>

        <div className="form">
          <form action="">
            <h3 className='h3_tag2'>Get A Quote</h3>

            <div className="name">
              <label htmlFor="">Name</label>
              <input type="text" placeholder='Name:' />
            </div>

            <div className="email">
              <label htmlFor="">Email</label>
              <input type="text" placeholder='Eamil:' />
            </div>

            <div className="msg">
              <label htmlFor="">Message</label>
              <textarea cols="20" rows="3" placeholder='Message:' style={{resize:"none"}}></textarea>
            </div>
            
            <button>Send</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Services