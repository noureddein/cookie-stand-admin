const Input = ({ name, label, error, _style, ...rest }) => {
  const { _input, _label, _container } = _style;
  return (
    <div className={_container}>
      <label htmlFor={name} className={_label}>
        {label}
      </label>
      <input {...rest} name={name} id={name} className={_input} />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
