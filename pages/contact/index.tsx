import { Page } from "styles/Global";
import { Container } from "styles/contact/index.styles";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import Button from "components/Button";
import toast, { Toaster } from "react-hot-toast";

interface FormData {
  name: string;
  email: string;
  text: string;
}

const notify = (msg: string) =>
  toast(msg, {
    position: "top-right",
    style: {
      color: "#fff",
      background: "green",
    },
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

const Contact: NextPage = () => {
  const [form, setForm] = useState<FormData>({ name: "", email: "", text: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });
      const dt = await res.json();
      setForm({ name: "", email: "", text: "" });
      notify(dt.message);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Page>
      <Head>
        <title>MaxTsh / Contact</title>
        <meta
          name="description"
          content="Maxtsh Blog created by NEXT.JS v12 Contact Page"
        />
      </Head>
      <Container>
        <form onSubmit={handleSubmit} className="form">
          <h1 className="title">Contact me</h1>
          <div className="form-group">
            <div className="form-group-control">
              <label className="label" htmlFor="name">
                Name:
              </label>
              <input
                value={form.name}
                onChange={handleChange}
                type="text"
                id="name"
                name="name"
                className="input"
                placeholder="Enter your name..."
                aria-label="Enter your name..."
              />
            </div>
            <div className="form-group-control">
              <label className="label" htmlFor="email">
                Email:
              </label>
              <input
                value={form.email}
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                className="input"
                placeholder="Enter your email..."
                aria-label="Enter your email..."
              />
            </div>
          </div>
          <textarea
            className="form-text"
            rows={12}
            name="text"
            placeholder="Enter your message..."
            value={form.text}
            onChange={handleChange}
          ></textarea>
          <Button bgColor="var(--blue)" color="#fff" type="submit">
            Submit
          </Button>
        </form>
      </Container>
      <Toaster />
    </Page>
  );
};

export default Contact;
