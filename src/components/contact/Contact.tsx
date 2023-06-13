import Loader from "react-loaders";
import "./index.scss";
import Animate from "../AnimateLetters/Animate";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import Lottie from "lottie-react";
import animation from "../../assets/animation/58728-contact-chat.json";
const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [formData, SetFormData] = useState<{
    name: string;
    email: string;
    subject: string;
    message: string;
  }>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const setTime = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return clearTimeout(setTime);
  }, []);

  const sendEmail = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await toast
      .promise(
        emailjs.send(
          "service_r2lm3zi",
          "template_hlrw9d9",
          { ...formData },
          "hkYqzWBQuYVKpqlgp"
        ),
        {
          loading: "loading",
          error: "something went wrong 👎",
          success: "👍",
        }
      )
      .then(() =>
        SetFormData({ name: "", email: "", subject: "", message: "" })
      );
    // .then(() => toast.success("👍"))
    // .catch((err) => {
    //   console.log(err);
    //   toast.error("something went wrong 👎");
    // });
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <Animate
              class={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              index={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    placeholder="Name"
                    onChange={(e) =>
                      SetFormData((pre) => ({ ...pre, name: e.target.value }))
                    }
                    type="text"
                    name="name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    onChange={(e) =>
                      SetFormData((pre) => ({
                        ...pre,
                        email: e.target.value,
                      }))
                    }
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    onChange={(e) =>
                      SetFormData((pre) => ({
                        ...pre,
                        subject: e.target.value,
                      }))
                    }
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    onChange={(e) =>
                      SetFormData((pre) => ({
                        ...pre,
                        message: e.target.value,
                      }))
                    }
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Mohamed Echbiy
          <br />
          Taroudant Morocco
          <br />
          +212601051898 <br />
          <span>echbiymed@gmail.com</span>
        </div>
        <div className="map-wrap">
          <Lottie animationData={animation} />
        </div>
      </div>
      <Loader active type="pacman" />
    </>
  );
};

export default Contact;

/*

emailjs
        .send(
          "service_r2lm3zi",
          "template_hlrw9d9",
          { ...formData },
          "wKYFBtQHVDYnaiJtj"
        )

*/
