import React from "react";

const contact = () => {
  return (
    <div className="contact">
      <main>
        <h2>Contact Us</h2>
        <form action="">
          <div>
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Abc" />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Abc@mail.com" />
          </div>
          <div>
            <label htmlFor="">Message</label>
            <textarea rows={5} type="text" placeholder="Tell us about your query" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default contact;
