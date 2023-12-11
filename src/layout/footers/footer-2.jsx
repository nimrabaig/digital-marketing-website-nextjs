import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import toast from "react-hot-toast";

import Link from "next/link";
import Image from "next/image";
// import EmailAeroplan from "@/src/svg/email-aeroplan";
import SocialLinks from "@/src/common/social-links";

import footer_shape_1 from "@assets/img/footer/shape-1.png";
import footer_logo from "@assets/img/footer/footer-lumenta-logo.png";
import { SUBSCRIBE_NEWS_LETTER } from "@/src/graphql/mutation";

const footer_two_content = {
  bg_img: "/assets/img/footer/footer-2-bg.png",
  footer_widget: [
    {
      title: "Pricing",
      path: "/pricing",
    },
    {
      title: "Blogs",
      path: "/blog",
    },
    { title: "Sitemap", path: "/coming-soon" },
  ],
  google_map:
    "https://maps.app.goo.gl/HkccwAFkhdHNYukw7",
  about_us: (
    <>
      We're an innovative and dynamic digital marketing agency, harnessing the
      power of data-driven strategies to propel our clients toward their
      business objectives.
    </>
  ),
  address: (
    <>
      1315 Derry Road East, Suite 1, Mississauga, <br /> Ontario, Canada L5T 1B6
    </>
  ),
  phone: "+1 (613) 807 - 2399",
  email: "info@lumentadigital.com",
  footer_nav: [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/" },
    { title: "services", link: "/service" },
    { title: "contact", link: "/contact" },
  ],
  mobile: "+1 (613) 807 - 2399",
};
const {
  bg_img,
  footer_widget,
  google_map,
  about_us,
  address,
  phone,
  email,
  footer_nav,
  mobile,
} = footer_two_content;

const FooterTwo = () => {
  const [Subscribe] = useMutation(SUBSCRIBE_NEWS_LETTER);
  const [ipAddress, setIPAddress] = useState("");
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => setIPAddress(data.ip))
      .catch((error) => console.log(error));
  }, []);

  const [validation, setValidation] = useState({
    name: { error: false, helperText: "" },
    email: { error: false, helperText: "" },
  });

  const handleInputChange = (field, value) => {
    setValues((prevValues) => ({ ...prevValues, [field]: value }));
    setValidation((prevValidation) => ({
      ...prevValidation,
      [field]: { error: false, helperText: "" },
    }));
  };

  const onSubmit = () => {
    let isValid = true;

    // Validate name
    if (values.name.trim() === "") {
      setValidation((prevValidation) => ({
        ...prevValidation,
        name: { error: true, helperText: "Name is required" },
      }));
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(values.email)) {
      setValidation((prevValidation) => ({
        ...prevValidation,
        email: { error: true, helperText: "Invalid email address" },
      }));
      isValid = false;
    }

    if (isValid) {
      toast.loading("Sending request...");
      Subscribe({
        variables: { ...values, ipAddress },
      })
        .then((resp) => {
          toast.dismiss();
          if (resp.data?.SubscribeNewsLetter?.success) {
            toast.success(resp.data?.SubscribeNewsLetter?.message);;
            setValues({
              name: "",
              email: ""
            })
          } else {
            toast.error(resp.data?.SubscribeNewsLetter?.message);
          }
        })
        .catch((err) => {
          toast.dismiss();
          toast.error("Unable to send message. Try again!");
          console.log(err);
        });
    } else {
      toast.error("Please fill all the required fields");
    }
  };

  return (
    <>
      <footer className="tp-footer-2-area p-relative">
        <div
          className="tp-footer-overlay"
          style={{ backgroundImage: `url(${bg_img})` }}
        >
          <div className="tp-footer-2-shape">
            <Image src={footer_shape_1} alt="theme-pure" />
          </div>
          <div className="container">
            <div className="tp-footer-2-main-area">
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-6">
                  <div className="tp-footer-widget tp-footer-2-col-1">
                  <div className="col-lg-2 col-md-2" style={{ marginBottom: 20 }}>
                  <div className="tp-footer-2-logo">
                    <Image
                      src={footer_logo}
                      alt="theme-pure"
                      width={180}
                      height={60}
                    />
                  </div>
                </div>
                    <h3 className="tp-footer-widget-title">Newsletter</h3>
                    <form
                      className="tp-footer-from"
                      onClick={(e) => e.preventDefault()}
                      method="POST"
                    >
                      <div className="tp-footer-text-email p-relative">
                        <input
                          type="text"
                          placeholder="Enter Your Name"
                          value={values.name}
                          onChange={(event) =>
                            handleInputChange("name", event.target.value)
                          }
                        />
                      </div>
                      <div className="tp-footer-text-email p-relative">
                        <input
                          type="text"
                          placeholder="Enter Email Address"
                          value={values.email}
                          onChange={(event) =>
                            handleInputChange("email", event.target.value)
                          }
                        />
                      </div>
                      <div className="tp-footer-btn" style={{ display: "flex", justifyContent: "flex-end"}}>
                        <div
                          className="tp-btn tp-btn-default mt-10 mb-30"
                          type="submit"
                          href=""
                          onClick={onSubmit}
                        >
                          Subscribe
                        </div>
                      </div>
                      {/* <div className="tp-footer-form-check">
                        <input
                          className="form-check-input"
                          id="flexCheckChecked"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked"
                        >
                          I agree to all your terms and policies
                        </label>
                      </div> */}
                    </form>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-3 col-md-6">
                  <div className="tp-footer-widget tp-footer-2-col-2">
                    <h3 className="tp-footer-widget-title">Important Links</h3>
                    <div className="tp-footer-widget-content">
                      <ul>
                        {footer_widget.map((item, i) => (
                          <li key={i}>
                            <Link href={item.path}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="tp-footer-widget tp-footer-2-col-3">
                    <h3 className="tp-footer-widget-title">About Us</h3>
                    <div className="tp-footer-widget-content">
                      <div className="tp-footer-info">
                        <p>{about_us}</p>
                        <div className="tp-footer-main-location">
                          <Link target="_blank" href={google_map}>
                            <i className="fa-sharp fa-light fa-location-dot"></i>
                            {address}
                          </Link>
                        </div>
                        <div className="tp-footer-main-mail">
                          <Link href={`mailto:${email}`}>
                            <i className="fa-regular fa-phone"></i>
                            {phone}
                          </Link>
                        </div>
                        <div className="tp-footer-widget-social">
                        <SocialLinks />
                      </div>
                      </div>
                       
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tp-footer-2-menu-area p-relative">
              <div className="row align-items-center">
               
                <div className="col-md-12">
                  <div className="tp-footer-2-menu">
                  Copyright © 2023 - Lumenta Digital Inc
                    {/* <ul>
                      {footer_nav.map((item, i) => (
                        <li key={i}>
                          <Link href={item.link}>{item.title}</Link>
                        </li>
                      ))}
                    </ul> */}

                  </div>
                </div>
                {/* <div className="col-lg-2 col-md-6">
                  <div className="tp-footer-2-call d-flex justify-content-lg-end">
                    <div className="ddf">
                      <p>Phone:</p>
                      <span>
                        <Link href={`tel:${mobile}`}>{mobile}</Link>
                      </span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTwo;
