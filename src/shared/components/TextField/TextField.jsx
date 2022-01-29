import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import styles from "./TextField.module.scss";

const TextField = ({ label, ...field }) => {
  const id = nanoid();
  if (field.required) {
    field.placeholder += " *";
  }

  return (
    <div className={styles.group}>
      {label && <label htmlFor={id}>{label}</label>}
      <input className={styles.input} {...field} id={id} />
    </div>
  );
};

TextField.defaultProps = {
  required: false,
  type: "text",
};

TextField.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  name: PropTypes.string,
};

export default TextField;
