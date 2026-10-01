export function SocialIcons({ light = false }: { light?: boolean }) {
  const cls = `h-4 w-4 ${light ? "text-cream" : "text-burgundy"}`;
  return <div className="flex items-center gap-3" aria-label="Social media links">
    <a href="https://youtube.com" aria-label="YouTube"><svg className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M23 7s-.2-1.6-.9-2.3c-.8-.9-1.8-.9-2.2-1C16.8 3.5 12 3.5 12 3.5s-4.8 0-7.9.2c-.4.1-1.4.1-2.2 1C1.2 5.4 1 7 1 7S.8 8.8.8 10.6v1.7C.8 14.1 1 16 1 16s.2 1.6.9 2.3c.8.9 1.9.8 2.4.9 1.7.2 7.7.3 7.7.3s4.8 0 7.9-.2c.4-.1 1.4-.1 2.2-1 .7-.7.9-2.3.9-2.3s.2-1.8.2-3.7v-1.7C23.2 8.8 23 7 23 7ZM9.7 14.5v-6l6.2 3.1-6.2 2.9Z"/></svg></a>
    <a href="https://instagram.com" aria-label="Instagram"><svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
    <a href="https://facebook.com" aria-label="Facebook"><svg className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4.2c-.5-.1-2.2-.2-4.1-.2C9 4 6.3 6.4 6.3 10.8V14H2v4.3h4.3V24h5.2v-5.7h4l.7-4.3h-4.7v-2.8C11.5 10 12 8 14 8Z"/></svg></a>
    <a href="https://wa.me/919876543210" aria-label="WhatsApp"><svg className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.8 14.1c-.2.6-1.2 1.2-1.8 1.3-.5.1-1.2.2-3.8-.9-3.2-1.3-5.3-4.6-5.5-4.8-.1-.2-1.3-1.8-1.3-3.4s.8-2.4 1.1-2.7c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .6l-.3.6-.5.6c-.2.2-.3.4-.1.7.2.3.8 1.3 1.8 2.1 1.2 1.1 2.3 1.5 2.6 1.7.3.1.5.1.7-.1l.9-1.1c.2-.3.4-.3.7-.2l2.1 1c.3.1.5.2.6.4.1.1.1.7-.1 1.1Z"/></svg></a>
  </div>;
}
