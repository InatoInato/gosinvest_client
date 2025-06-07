import { useState } from "react";
import styles from "./Auth.module.css";
import { login, register } from "../../api";

export default function Auth() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
  });

  const validateField = (name: string, value: string) => {
    if (name === "password") {
      return value.trim() === "" || (activeTab === "register" && value.length < 8);
    }
    return value.trim() === "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name as keyof typeof touched]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setTouched((prev) => ({ ...prev, [name]: true }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: activeTab === "register" && formData.name.trim() === "",
      email: formData.email.trim() === "",
      password:
        formData.password.trim() === "" ||
        (activeTab === "register" && formData.password.length < 8),
    };

    setErrors(newErrors);
    setTouched({ name: true, email: true, password: true });

    if (Object.values(newErrors).some(Boolean)) return;

    try {
      if (activeTab === "login") {
        const res = await login({
          email: formData.email,
          password: formData.password,
        });
        alert("Успешный вход: " + res.data.message);
      } else {
        const res = await register(formData);
        alert("Успешная регистрация: " + res.data.message);
      }

      setFormData({ name: "", email: "", password: "" });
      setErrors({ name: false, email: false, password: false });
      setTouched({ name: false, email: false, password: false });
    } catch (err: any) {
      alert("Ошибка: " + (err.response?.data?.message || "Что-то пошло не так"));
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.tabSwitcher}>
        <button
          className={`${styles.tabButton} ${activeTab === "login" ? styles.active : ""}`}
          onClick={() => setActiveTab("login")}
        >
          Вход
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === "register" ? styles.active : ""}`}
          onClick={() => setActiveTab("register")}
        >
          Регистрация
        </button>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>{activeTab === "login" ? "Вход" : "Регистрация"}</h2>

        {activeTab === "register" && (
          <input
            name="name"
            type="text"
            placeholder="Имя"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${styles.input} ${errors.name ? styles.error : ""}`}
          />
        )}

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${styles.input} ${errors.email ? styles.error : ""}`}
        />

        <input
          name="password"
          type="password"
          placeholder="Пароль"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${styles.input} ${errors.password ? styles.error : ""}`}
        />

        <button type="submit">
          {activeTab === "login" ? "Войти" : "Зарегистрироваться"}
        </button>
      </form>
    </div>
  );
}
