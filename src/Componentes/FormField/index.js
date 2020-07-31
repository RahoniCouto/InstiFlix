import React from 'react';

function FormField({
  label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`;

  return (
    <div>
      <label>
        {label}
        :
        <input
          id={fieldId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default FormField;
