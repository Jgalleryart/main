"use client";

import { FormEvent, useEffect, useState } from "react";

type ContactFormProps = {
  relatedArtworkTitle?: string;
};

export default function ContactForm({ relatedArtworkTitle }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!relatedArtworkTitle) return;

    const prefill = `Regarding: ${relatedArtworkTitle}\n\n`;
    setMessage((previous) => (previous.trim().length === 0 ? prefill : previous));
  }, [relatedArtworkTitle]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        setErrorMessage("Unable to send right now. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setErrorMessage("Unable to send right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return <p className="contact-thank-you">Thank you for your message.</p>;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {relatedArtworkTitle ? (
        <p className="contact-related">
          Regarding: <em>{relatedArtworkTitle}</em>
        </p>
      ) : null}

      <label className="contact-field">
        <span>Name</span>
        <input type="text" name="name" autoComplete="name" required disabled={loading} />
      </label>

      <label className="contact-field">
        <span>Email</span>
        <input type="email" name="email" autoComplete="email" required disabled={loading} />
      </label>

      <label className="contact-field">
        <span>Message</span>
        <textarea
          name="message"
          rows={7}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
          disabled={loading}
        />
      </label>

      {errorMessage ? (
        <p className="contact-error" role="status">
          {errorMessage}
        </p>
      ) : null}

      <button type="submit" className="contact-submit">
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
