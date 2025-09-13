import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import css from "./contact.module.scss";
import { toast } from "react-hot-toast";
import ContentWrapper from "../wrapper/Wrapper";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_FORM_SERVICE_ID,
        import.meta.env.VITE_FORM_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_FORM_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Message sent successfully.");
          console.log(result.text);
          setLoading(false);
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
        }
      );
  };
  return (
    <div className={` paddings ${css.wrapper}`}>
      <a className="anchor" id="contact"></a>
      <ContentWrapper>
        <div className={`flexCenter ${css.container}`}>
          <h1 className="primaryText">
            Get In <span className="purple">Touch!</span>
          </h1>
          <span>
            If my skills align with your needs and you’re seeking a dedicated
            Software Developer, please don’t hesitate to reach out to me.
          </span>
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <label>Name</label>
              <input
                placeholder="John Doe"
                type="text"
                name="user_name"
                required
              />
            </div>
            <div>
              <label>Email</label>
              <input
                placeholder="Youremail@gmail.com"
                type="email"
                name="user_email"
                required
              />
            </div>
            <div>
              <label>Message</label>
              <textarea
                placeholder="Your Message..."
                rows={6}
                name="message"
                required
              />
            </div>
            <input
              type="submit"
              value={loading ? "Loading..." : "Send Message"}
              className="btn"
            />
          </form>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Contact;
