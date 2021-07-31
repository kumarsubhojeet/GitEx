import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="Contact_main">
        <div className="C_head">
          <h4>Contact Us</h4>
          <i class="far fa-envelope faas"></i>
        </div>
       
        <div className="inputs_item">
        <form
                action="/Contact"
                name="contact"
                method="POST"
                data-netlify="true"
              >
          <input type="hidden" name="form-name" value="contact" />

          <div className="input_item">
            <div class="First_Name">
              <input
                type="text"
                id="name"
                name="name"
                required
                class="form-control"
                placeholder="First Name"
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
              placeholder="Your Email..."
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
          </form>
        </div>
     
      </div>
    </div>
  );
};

export default Contact;
