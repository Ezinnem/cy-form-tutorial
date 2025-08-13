import React, { useState } from 'react';

export default function RegistrationForm() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setMessage('Please fill in all fields');
      return;
    }

    setMessage(`Welcome, ${form.name}!`);
  };

  return (
    <div>
      <h2>Register</h2>
      <form data-cy="registration-form" onSubmit={handleSubmit}>
        <input
          data-cy="name"
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          data-cy="email"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          data-cy="password"
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <button data-cy="submit" type="submit">Register</button>
      </form>
      {message && <p data-cy="message">{message}</p>}
    </div>
  );
}
