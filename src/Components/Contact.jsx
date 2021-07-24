import React from "react";
import {
  Form
} from "reactstrap";

const Contact = () => {
  return (
    <div>
      <div className="Contact_main">
        <div className="C_head">
          <h4>Contact Us</h4>
          <i class="far fa-envelope faas"></i>
        </div>
       
        <div className="inputs_item">
        <Form
                action="contact"
                name="contact"
                method="POST"

                data-netlify="true"
              >
          
          <div className="input_item">
            <div class="First_Name">
              <input
                type="text"
                id="name"
                name="name"
                required
                class="form-control"
                placeholder="Your Name"
              />
            </div>

            {/* <div class="Last_name">
              <input type="text" 
               name="name"
               required
              class="form-control"  placeholder="Last Name" />
            </div> */}
          </div>

          <div class="Email">
            <input
              type="email"
              id="email"
              name="email"
              required
              class="form-control"
              placeholder=" enter Your Email..."
              
            />
          </div>
          <textarea
            class="form-control textArea"
            placeholder="Any Suggestions"
            name="message"
            required
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <button  type="submit" class="btn btn-success">
            SEND
          </button>
          </Form>
        </div>
     
      </div>
    </div>
  );
};

export default Contact;
