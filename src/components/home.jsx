import React from "react";
import vg from "../assets/kisspng-google-logo-g-suite-chrome-5ab6e618b3b2c3.5810634915219358967361.jpg";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Hello world</h1>
          <p>A drakness to light</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="" />
        <div>
          <p>
            The evolution is every. Be more successfull with our service. we
            hope our will never disappoint you at any cost, thank you to
            visiting our website god bless you.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
            consectetur at culpa ut saepe illum rerum optio, minus laudantium
            eos, esse unde ea quidem ipsa magnam. Cupiditate facilis, dolorum
            accusamus, debitis ad culpa vitae ex, vel neque repudiandae
            aspernatur? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Id odit, totam consequuntur, harum impedit quibusdam odio
            possimus, voluptas libero iste repellat temporibus velit quod.
            Quaerat tempora qui saepe laudantium deserunt reiciendis, voluptas
            harum amet eveniet commodi dicta, sint doloremque! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Modi quis quod assumenda ut
            repellat incidunt quas non tempore eos molestias, dolor alias illo
            iure neque consequatur. Ipsam, consequatur est.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s,",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default home;
