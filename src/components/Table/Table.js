import React from "react";
import styles from "./styles.module.css";

const columns = ["Sosyal Medya Linki", "Sosyal Medya Adı", "Açıklama"];

const Table = ({ formData }) => {

  // Form verilerinin gösterildiği alan.
  return (
    <div>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.tableHead}>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
          
          {formData
            ? formData.map((data, i) => (
                <tr key={i}>
                  <td>{data.link}</td>
                  <td>{data.name}</td>
                  <td>{data.desc}</td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
