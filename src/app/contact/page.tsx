"use client";

import { useState } from "react";
import Tape from "@/components/ui/Tape";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="app">
      <header className="page-head">
        <span className="section-tab">say hello</span>
        <h1>Get in touch</h1>
        <p>
          Got a place we have to try, a correction, or just want to say hi? Drop
          us a note — we read every one.
        </p>
      </header>
      <div className="postcard">
        <Tape style={{ top: -14, right: 40, transform: "rotate(4deg)" }} />
        {sent ? (
          <div className="form-done">got it — thanks for writing! ♥</div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="form-row">
              <div className="field">
                <label>your name</label>
                <input type="text" placeholder="your name" required />
              </div>
              <div className="field">
                <label>email</label>
                <input type="email" placeholder="you@email.com" required />
              </div>
            </div>
            <div className="field">
              <label>your message</label>
              <textarea placeholder="Tell us about that hidden café…" required />
            </div>
            <button className="submit" type="submit">
              Send it our way →
            </button>
          </form>
        )}
        <div className="contact-extra">
          <span className="chip">✉ hello@scrapyrience.in</span>
          <span className="chip">◎ @scrapyrience</span>
          <span className="chip">⌖ Bangalore, India</span>
        </div>
      </div>
    </div>
  );
}
