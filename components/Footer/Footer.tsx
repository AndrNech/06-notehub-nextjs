'use client';
import css from './Footer.module.css';
// import { useEffect, useState } from 'react';

export default function Footer() {
  // const [now, setNow] = useState(2026);

  // useEffect(() => {
  //   setNow(new Date().getFullYear());
  // }, []);

  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: your name</p>
          <p>
            Contact us:
            <a href="<mailto:student@notehub.app>">student@notehub.app</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
