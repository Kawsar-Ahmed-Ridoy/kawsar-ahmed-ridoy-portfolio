import React from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2sveyfh",
        "template_wjj07mv",
        e.target,
        "ozPMoOfTBVfPQKaWu"
      )
      .then((res) => {
        console.log(res);
        toast.success('Message Sent Successfully')
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="mb-8">
      <div id="contact">
        <h2 className="text-center text-4xl font-bold text-green-500">
          Contact Me
        </h2>
        <p className="text-center  text-gray-500">__________________</p>
      </div>
      <div className="md:w-1/2 lg:w-1/2  mx-auto">
        <form onSubmit={sendEmail} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name "
              className="input input-bordered border-red-500"
              require
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="email "
              className="input input-bordered border-black"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24 border-blue-500"
              placeholder="message"
              type="text"
              name="message"
              required
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn bg-cyan-400 border-none"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
