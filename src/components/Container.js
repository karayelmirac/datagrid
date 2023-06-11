import React, { useState, useEffect } from "react";
import Table from "./Table/Table";
import styles from "./styles.module.css";
import Account from "./Account/Account";
const Container = () => {
  const [fullData, setFullData] = useState([]);
  const [formData, setFormData] = useState({ link: "", name: "", desc: "" });

  const [formDataJson, setFormDataJson] = useState(null);
  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      setFormDataJson(JSON.parse(savedFormData));
    }
  }, []);
      // Container olarak kullanilan alan stateleri yönetmek ve tasarım için kuruldu.
  return (
    <div className={styles.container}>
      <Account
        fullData={fullData}
        setFullData={setFullData}
        formData={formData}
        setFormData={setFormData}
      />
      <Table formData={formDataJson} />
    </div>
  );
};

export default Container;
