import React, { type FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
    )
    .join("&");
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...form,
        }),
      });

      setStatus("success");
      setForm(initialState);
    } catch (error) {
      console.error("Błąd wysyłki formularza:", error);
      setStatus("error");
    }
  };

  return (
    <section style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>Formularz kontaktowy</h2>
        <p style={styles.subtitle}>Napisz do nas — odpowiemy jak najszybciej.</p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          style={styles.form}
        >
          {/* Netlify hidden field */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot anti-spam */}
          <p style={{ display: "none" }}>
            <label>
              Nie wypełniaj tego pola: <input name="bot-field" />
            </label>
          </p>

          <label style={styles.label}>
            Imię
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              style={styles.input}
              placeholder="Twoje imię"
            />
          </label>

          <label style={styles.label}>
            E-mail
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              style={styles.input}
              placeholder="twoj@email.com"
            />
          </label>

          <label style={styles.label}>
            Wiadomość
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              style={styles.textarea}
              placeholder="Napisz wiadomość..."
            />
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            style={{
              ...styles.button,
              opacity: status === "sending" ? 0.7 : 1,
              cursor: status === "sending" ? "not-allowed" : "pointer",
            }}
          >
            {status === "sending" ? "Wysyłanie..." : "Wyślij wiadomość"}
          </button>

          {status === "success" && (
            <p style={styles.success}>Dziękujemy! Wiadomość została wysłana.</p>
          )}

          {status === "error" && (
            <p style={styles.error}>
              Wystąpił błąd podczas wysyłki. Spróbuj ponownie.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    padding: "40px 16px",
    display: "flex",
    justifyContent: "center",
  },
  card: {
    width: "100%",
    maxWidth: "600px",
    background: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    border: "1px solid #e5e7eb",
  },
  title: {
    margin: "0 0 8px",
    fontSize: "28px",
    fontWeight: 700,
    color: "#111827",
  },
  subtitle: {
    margin: "0 0 24px",
    color: "#6b7280",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    fontWeight: 600,
    color: "#111827",
  },
  input: {
    padding: "12px 14px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    fontSize: "16px",
    outline: "none",
  },
  textarea: {
    padding: "12px 14px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    fontSize: "16px",
    outline: "none",
    resize: "vertical",
  },
  button: {
    marginTop: "8px",
    padding: "14px 18px",
    borderRadius: "12px",
    border: "none",
    background: "#111827",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: 700,
  },
  success: {
    marginTop: "8px",
    color: "#15803d",
    fontWeight: 600,
  },
  error: {
    marginTop: "8px",
    color: "#b91c1c",
    fontWeight: 600,
  },
};