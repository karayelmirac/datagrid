import React from "react";
import styles from "./styles.module.css";
const Account = ({ fullData, setFullData, formData, setFormData }) => {

  //Form Verilerinin doldurulduğu alan.

  //const [formData, setFormData] = useState({ link: "", name: "", desc: "" });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yerel depolama kaydetme işlemi

    setFullData([...fullData, formData]);
    localStorage.setItem("formData", JSON.stringify(fullData));
  };

  return (
    <div>
      <form className={styles.account} onSubmit={handleSubmit}>
        <input
          type="text"
          name="link"
          value={formData.link}
          onChange={handleChange}
          placeholder="Sosyal Medya Linki"
        />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Sosyal Medya Adı"
        />
        <input
          type="text"
          name="desc"
          value={formData.desc}
          onChange={handleChange}
          placeholder="Açıklama"
        />
        <button className={styles.saveButton} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Account;
