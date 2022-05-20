import { useEffect, useState } from "react";
import CircleCard from "../circleCard";
import { data } from "../data/contact";

import { motion } from "framer-motion";
import '../../styles/contact.scss';
const Contact = () => {

    const initialValues = { username: "", email: "", subject: "", message:"" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
      };
    
      useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
      }, [formErrors]);

      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
          errors.username = "Username is required!";
        }
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.subject) {
          errors.subject = "Subject is required";
        } 
        if (!values.message) {
            errors.message = "Message is required";
          }

        return errors;
      };

  return (
    <div
    className="">
      <div className="row mt-5 p-3">
        
        {data.map((item, key) => {
          return (
            <div key={key} className="col-md-4 text-center">
              <CircleCard
                icon={item.icon}
                title={item.title}
                text={item.text}
              />
            </div>
          );
        })}
      </div>

      <div className="row ">
        <div className="col-md-12 p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <div className="row">
                <div className="col-md-6">
                  <div>
                    <input
                      type="text"
                      name="username"
                      className="form-control bg-dark text-white mb-3 shadow-none"
                      aria-describedby="nameHelp"
                      placeholder="Your Name"
                      value={formValues.username}
                      onChange={handleChange}
                    />
                    <div id="nameHelp" className="form-text text-danger">
                      {formErrors.username}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <input
                      type="email"
                      name="email"
                      className="form-control bg-dark text-white shadow-none"
                      aria-describedby="emailHelp"
                      placeholder="Your Email"
                      value={formValues.email}
                      onChange={handleChange}
                    />
                    <div id="emailHelp" className="form-text text-danger" >
                        {formErrors.email}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="subject"
                className="form-control bg-dark mb-4 text-white shadow-none"
                aria-describedby="subjectHelp"
                placeholder="Subject"
                value={formValues.subject}
                onChange={handleChange}
              />
              <div id="subjectHelp" className="form-text text-danger">
                {formErrors.subject}
              </div>
            </div>
            <div className="mb-3">
              <textarea name="message" className="form-control text-white bg-dark shadow-none" rows={5}  placeholder="Message" value={formValues.message} onChange={handleChange} />
                <div  className="form-text text-danger">
                    {formErrors.message}
                </div>
            </div>
            <div className="mb-3 d-flex justify-content-center">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} className="submit" type="submit" >Send Message</motion.button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
