import Swal from 'sweetalert2';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Email = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();

  const onSubmit = async (event) => {
    event.preventDefault();
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'nafis',
      message: message,
    };

    emailjs
      .send('service_qahnqlk', 'template_p5q7t3o', templateParams, '55VoUQ1VIfW58Ylw4')
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({
            title: "Good job!",
            text: "Successfully sent message",
            icon: "success"
          });
          setName('');
          setEmail('')
          setMessage('')
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
    
    event.target.reset();
  };

  return (
    <div>
      <section>
        <h1 className="text-center text-4xl font-bold">Contact by email</h1>
        <div className="hero mb-5">
          <div className="hero-content">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form ref={form} onSubmit={onSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    className="textarea textarea-primary h-48 w-64"
                    placeholder="Write Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Send email</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Email;


// Hello {{user_name}},

// You got a new message from user_name:

// {{message}}

// Best wishes,
// EmailJS team