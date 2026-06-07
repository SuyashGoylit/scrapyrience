"use client";

import { useState } from "react";
import Tape from "@/components/ui/Tape";

export default function NewsletterPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="app">
      <header className="page-head">
        <span className="section-tab">newsletter</span>
        <h1>Postcards from us</h1>
        <p>
          About once a month we send a little round-up of where we went, what
          was worth it, and the spots still on our list. No spam, just scraps.
        </p>
      </header>
      <div className="postcard">
        <Tape kind="pink" style={{ top: -14, left: 40, transform: "rotate(-5deg)" }} />
        {sent ? (
          <div className="form-done">you&rsquo;re on the list! talk soon ♥</div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="field">
              <label>your name</label>
              <input type="text" placeholder="Sejal" required />
            </div>
            <div className="field">
              <label>email address</label>
              <input type="email" placeholder="you@email.com" required />
            </div>
            <button className="submit" type="submit">
              Send me the scraps →
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
