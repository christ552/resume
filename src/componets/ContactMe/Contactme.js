import React, { useState } from "react";
import "./Contactme.css";
// import ContactinfoCard from "./ContactinfoCard/ContactinfoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contactme = () => {
  // ============bellow for form validation=======================
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    mail: "",
    telephone: "",
    message: "",
  });
  // ===============================================
  const [nom, setNom] = useState("");

  // ==================================================
  // =======Below for creatting error state variable objec=================
  const [errors, setErrors] = useState(false);

  // ====================================================
  const handleChange = (e) => {
    // (e="events")
    console.log(e.target.value, e.target.nom);
    // const { nom, value } = e.target;
    // setFormData({
    //   formData,
    //   [nom]: value,
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nom.length == 0) {
      setErrors(true);
    }
    const validationErrors = {};

    // --------------for nom field validation---------------------------------

    if (!formData.nom.trim()) {
      validationErrors.nom = "La nom est requis";
    }
    // ---------for mail field validation--------------------------------------
    // if (!formData.mail.trim()) {
    //   validationErrors.mail = "L'addres mail est requis";
    // } else if (!/\S+@\S\.\s+/.test(formData.mail)) {
    //   validationErrors.mail = "Le mail n'est pas valide";
    // }
    // -------------for telephoe number field validation---------------------------
    // if (!formData.telephone.trim()) {
    //   validationErrors.telephone = "Le numéro de téléphone est requis";
    // } else if (formData.mail.length < 17) {
    //   validationErrors.telephone = "Le numéro de téléphone est incorrecte";
    // }
    // -----------for the message field validation------------------------
    // if (formData.message.trim()) {
    //   validationErrors.message = "La message est requis";
    // }
    // ====================end validation=========================
    // setErrors(validationErrors);
    // if (Object.keys(validationErrors).length === 0) {
    //   alert("La message soumis avec succès");
    // }
  };
  // ==========Bellow for form submission ==================
  // const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9a75923b-d65c-4b80-a267-787eb9821dd9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <section className="contactme-container container">
      {/* ================================================== */}

      {/* ================================================== */}
      <div className="contact-title">{/* <h1>Get in touch</h1> */}</div>
      <div className="contact-section">
        <div className="contact-left-section">
          <div className="h1 container">
            <h1>Let's talk</h1>
          </div>
          <div className="p container">
            <p>
              Je suis actuellement disponible pour entreprendre un nouveau
              projet, alors n'hésitez pas à envoyer un message sur tout ce sur
              quoi vous souhaitez que je travaille, vous pouvez me contacter à
              tout moment.
            </p>
          </div>
          <div className="contact-details">
            <div className="contact-detail">
              <FontAwesomeIcon icon={faEnvelope} />
              <h4>christiyustin@gmail.com</h4>
            </div>
            <div className="contact-detail">
              <FontAwesomeIcon icon={faLocationPin} />
              <h4>
                8 Rue louise bourgeois,
                <br /> 94260 FRESNES, <br />
                FRANCE.
              </h4>
            </div>
            <div className="contact-detail">
              <FontAwesomeIcon icon={faPhone} />
              <h4>+33 6 52 98 45 88</h4>
            </div>
          </div>
        </div>
        {/* ======================form start=========================== */}
        {/* =========================================================== */}

        <div className="contact-right-section">
          <div className="container">
            <form action="" className="contact-right" onSubmit={onSubmit}>
              <label htmlFor="nom-sender">NOM</label>
              <input
                type="text"
                placeholder="enter your nom"
                name="nom"
                className="input-nom"
                id="nom-sender"
                onChange={(e) => setNom(e.target.value)}
              />
              {errors && nom.length <= 0 ? <label>not to be empty</label> : ""}
              {/* ----------------------------------- */}
              <label htmlFor="prenom-sender">PRENOM</label>
              <input
                type="text"
                placeholder="Entrez votre prénom"
                name="prenom"
                id="prenom-sender"
                // onChange={handleChange}
                onSubmit={handleChange}
              />
              {/* {errors.prenom && <span>{errors.prenom}</span>} */}
              {/* ----------------------------------- */}
              <label htmlFor="email-sender">Email</label>
              <input
                type="email"
                name="mail"
                id="email-sender"
                placeholder="nom@mail.com"
                // onChange={handleChange}
              />
              {/* {errors.mail && <span>{errors.mail}</span>} */}
              {/* ----------------------------------- */}
              <label htmlFor="numero_telephone">Numero telephone</label>
              <input
                type="tel"
                name="telephone"
                id="numero_telephone"
                placeholder="+33 0 00 00 00 00"
                // onChange={handleChange}
              />
              {/* {errors.telephone && <span>{errors.telephone}</span>} */}
              {/* ----------------------------------- */}
              <label htmlFor="message-sender">Write your message here</label>
              <textarea
                name="message"
                id="message-sender"
                cols="90"
                rows="8"
                placeholder="Enter your message"
                // onChange={handleChange}
              ></textarea>
              <button type="submit" className="contact-submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactme;
