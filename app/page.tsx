import type { ReactNode } from "react";

const LINE_URL = "https://line.me/R/ti/p/@livingstyle";
const PHONES = [
  { label: "086-669-9099", href: "tel:0866699099" },
  { label: "084-675-4046", href: "tel:0846754046" },
];
const FACEBOOK_URL = "https://www.facebook.com/LivingstyleStudio";
const INSTAGRAM_URL = "https://www.instagram.com/livingstylestudio";

const highlights = [
  {
    title: "คัดสรรทุกชิ้นด้วยรสนิยม",
    body: "Homestylist เลือกของตกแต่ง ดอกไม้ และต้นไม้ให้เข้ากับพื้นที่และตัวตนของคุณ ไม่ใช่แค่ซื้อมาวาง",
    icon: <IconLeaf />,
  },
  {
    title: "เห็นแนวทางก่อนตัดสินใจ",
    body: "เข้าสำรวจและทดลองจัดวางที่หน้างานจริง กำหนด Mood & Tone ร่วมกันก่อนเริ่มตกแต่ง",
    icon: <IconEye />,
  },
  {
    title: "ดูแลครบ จบในวันเดียว",
    body: "ทีมงานนำของไปจัดถึงที่ เก็บรายละเอียดและพื้นที่ให้เรียบร้อย คุณไม่ต้องประสานงานเอง",
    icon: <IconHome />,
  },
];

const steps = [
  { name: "ส่งภาพพื้นที่", body: "ส่งรูปบ้านและบอกบรรยากาศที่อยากได้ทางไลน์" },
  { name: "กำหนดแนวทาง", body: "สำรวจหน้างาน ทดลองจัดวาง และเลือก Mood & Tone" },
  { name: "Styling Day", body: "ทีมงานพร้อม Homestylist เข้าตกแต่งจริงภายในวันเดียว" },
  { name: "เก็บรายละเอียด", body: "ปรับจุดสุดท้ายให้ลงตัว พร้อมสรุปรายการของตกแต่ง" },
];

const included = [
  "Homestylist ดูแลแนวทางการตกแต่งตลอดงาน",
  "ของตกแต่ง เช่น พร็อพ รูปภาพ หมอน พรม และน้ำหอม",
  "ดอกไม้และต้นไม้ประดิษฐ์คุณภาพพรีเมียมจาก Living Style",
  "ทีมงานจัดวางและเก็บรายละเอียดถึงที่",
];

const reviews = [
  {
    quote: "สวยแบบ....สะกดตาสะกดใจมาก พอตอนกลับบ้านมาที่แต่งเสร็จแล้ว คือแบบ..ซาบซึ้งมากค่ะ",
    name: "คุณ เป็กกี๊",
    role: "Home Owner",
  },
  {
    quote:
      "พิมพ์จะอยู่ยังไงคะ....พี่จิ๋มจัดสวยขนาดนี้ นึกไม่ออกเลยว่ามีแล้วมันจะน่ารักขนาดนี้ จากที่พิมพ์ไม่รู้จะเอาอะไรมาวางดี",
    name: "คุณพิมมาดา",
    role: "Home Owner",
  },
  {
    quote:
      "หนูเปิดเข้ามาแล้ว หนูก็แบบ Wow มาก HAPPY มาก....ทุกวันนี้เลยอยากเข้ามาอยู่ในห้อง ทำทุกอย่างในห้อง",
    name: "คุณหนิง และ น้องณิริน",
    role: "Home Owner",
  },
  {
    quote:
      "อีกหนึ่งความประทับใจ คือ ความเป็นมืออาชีพของทีมงาน เพราะสามารถ Set up ทุกอย่างให้เสร็จภายในวันเดียวได้",
    name: "คุณนุ่น คุณท๊อป",
    role: "128 Massage Owner",
  },
];

const faqs = [
  {
    q: "ใช้งบประมาณเท่าไหร่",
    a: "เริ่มต้นประมาณ 150,000 บาท แบ่งเป็นค่าบริการ 30,000 บาท และค่าสินค้า 120,000 บาท ค่าสินค้าคิดตามชิ้นที่ใช้จริง และปรับงบได้ตามพื้นที่",
  },
  {
    q: "ใช้เวลานานแค่ไหน",
    a: "หลังคุยแนวทาง Mood & Tone ลงตัวแล้ว วัน Styling Day ทีมงานจัดเสร็จภายใน 1 วัน",
  },
  {
    q: "ถ้าจัดแล้วไม่ชอบบางจุด ปรับได้ไหม",
    a: "ได้ครับ ปรับเปลี่ยนของบางชิ้นได้ในวัน Styling Day โดยมี Homestylist ช่วยแนะนำจนลงตัว",
  },
  {
    q: "อยู่ต่างจังหวัดใช้บริการได้ไหม",
    a: "ได้ครับ มีค่าเดินทางตามระยะทาง เช่น พัทยา 3,000 บาท เขาใหญ่ 5,000 บาท ส่งโลเคชันมาให้เราประเมินได้",
  },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-30 border-b border-sand/80 bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
          <a href="#top" className="flex flex-col leading-none">
            <span className="font-display text-xl tracking-[0.3em] text-forest">LVST</span>
            <span className="mt-1 font-display text-[0.625rem] tracking-[0.25em] text-muted">
              LIVING STYLE STUDIO
            </span>
          </a>
          <LineButton size="sm" />
        </div>
      </header>

      <main id="top">
        {/* ส่วนหัว */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-14 pb-20 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:pt-24 md:pb-28">
            <div>
              <Eyebrow>HOMESTYLING · BANGKOK</Eyebrow>
              <h1 className="mt-5 text-hero font-normal text-forest">
                บ้านที่ลงตัว
                <br />
                ในแบบที่เป็นคุณ
              </h1>
              <p className="mt-6 max-w-md text-lead text-muted">
                Homestylist คัดสรรและจัดวางทุกชิ้นให้เข้ากับพื้นที่และรสนิยมของคุณ
                ดูแลครบจนจบงานภายในวันเดียว
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
                <LineButton />
                <a href="#price" className="text-sm text-forest underline decoration-gold/60 underline-offset-8 hover:decoration-gold">
                  ดูราคาเริ่มต้น
                </a>
              </div>
            </div>
            <HeroArt />
          </div>
        </section>

        {/* จุดเด่น 3 ข้อ */}
        <section className="bg-ivory py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <SectionHead eyebrow="WHY LVST" title="ความต่างที่คุณสัมผัสได้" />
            <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
              {highlights.map((h) => (
                <div key={h.title} className="border-t border-gold-soft pt-8">
                  <div className="text-gold">{h.icon}</div>
                  <h3 className="mt-5 text-lg font-normal text-forest">{h.title}</h3>
                  <p className="mt-3 text-body text-muted">{h.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* บริการและราคา */}
        <section id="price" className="scroll-mt-20 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <SectionHead eyebrow="SERVICE & PRICE" title="บริการ Homestyling" />
            <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-10">
              <div className="rounded-sm bg-forest p-8 text-ivory md:p-10">
                <p className="font-display text-eyebrow text-gold-soft">STARTING FROM</p>
                <p className="mt-4 text-sm text-ivory/70">งบประมาณเริ่มต้นประมาณ</p>
                <p className="mt-1 text-4xl font-light tracking-wide md:text-5xl">
                  150,000 <span className="text-lg">บาท</span>
                </p>
                <dl className="mt-8 space-y-3 border-t border-ivory/15 pt-6 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-ivory/70">ค่าบริการ Homestyling</dt>
                    <dd>30,000 บาท</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-ivory/70">ค่าสินค้า (คิดตามชิ้นที่ใช้จริง)</dt>
                    <dd>120,000 บาท</dd>
                  </div>
                </dl>
                <p className="mt-6 text-sm leading-relaxed text-ivory/70">
                  ปรับงบได้ตามขนาดและความต้องการของพื้นที่
                </p>
                <ul className="mt-8 space-y-3 border-t border-ivory/15 pt-6">
                  {included.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-soft" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-display text-eyebrow text-gold">HOW WE WORK</h3>
                <ol className="mt-6">
                  {steps.map((s, i) => (
                    <li key={s.name} className="flex gap-5 border-b border-sand py-5 first:pt-0">
                      <span className="font-display text-2xl text-gold">0{i + 1}</span>
                      <div>
                        <p className="font-normal text-forest">{s.name}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted">{s.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 text-sm leading-relaxed text-muted">
                  เหมาะกับบ้านและคอนโดใหม่ บ้านรีโนเวท บ้านตัวอย่าง รวมถึงคาเฟ่ ออฟฟิศ และโรงแรม
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ปุ่มกลางหน้า */}
        <section className="bg-sand/60 py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
            <p className="text-xl text-forest md:text-2xl">ส่งภาพพื้นที่ของคุณมาให้เราดู</p>
            <p className="mt-3 text-body text-muted">
              Homestylist จะแนะนำแนวทางเบื้องต้นให้ โดยไม่มีค่าใช้จ่าย
            </p>
            <div className="mt-8 flex justify-center">
              <LineButton />
            </div>
          </div>
        </section>

        {/* เสียงลูกค้า */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <SectionHead eyebrow="CLIENT WORDS" title="เสียงจากเจ้าของบ้าน" />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {reviews.map((r) => (
                <figure key={r.name} className="rounded-sm border border-sand bg-ivory p-7 md:p-9">
                  <span aria-hidden className="font-display text-4xl leading-none text-gold-soft">
                    &ldquo;
                  </span>
                  <blockquote className="mt-2 text-body text-ink">{r.quote}</blockquote>
                  <figcaption className="mt-5 text-sm">
                    <span className="text-forest">{r.name}</span>
                    <span className="ml-2 font-display text-xs tracking-widest text-muted uppercase">
                      {r.role}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* คำถามที่พบบ่อย */}
        <section className="bg-ivory py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <SectionHead eyebrow="FAQ" title="คำถามที่พบบ่อย" />
            <div className="mt-10 border-t border-sand">
              {faqs.map((f) => (
                <details key={f.q} className="group border-b border-sand">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-forest">
                    <span>{f.q}</span>
                    <span
                      aria-hidden
                      className="text-xl font-light text-gold transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-6 text-body text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ติดต่อเรา */}
        <section id="contact" className="bg-forest py-20 text-ivory md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <p className="font-display text-eyebrow text-gold-soft">CONTACT</p>
                <h2 className="mt-4 text-title font-normal">เริ่มจากบทสนทนาสั้น ๆ</h2>
                <p className="mt-4 max-w-md text-body text-ivory/75">
                  ส่งรูปบ้านและบอกสไตล์ที่ชอบ แล้วเราจะนัดพูดคุยแนวทางที่เหมาะกับคุณที่สุด
                </p>
                <div className="mt-8">
                  <LineButton tone="light" />
                </div>
              </div>

              <ul className="space-y-5 text-sm md:pt-10">
                <ContactRow label="LINE">
                  <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold-soft">
                    @Livingstyle
                  </a>
                </ContactRow>
                <ContactRow label="โทร">
                  {PHONES.map((p, i) => (
                    <span key={p.href}>
                      {i > 0 && <span className="mx-2 text-ivory/40">/</span>}
                      <a href={p.href} className="hover:text-gold-soft">
                        {p.label}
                      </a>
                    </span>
                  ))}
                </ContactRow>
                <ContactRow label="Facebook">
                  <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold-soft">
                    LivingstyleStudio
                  </a>
                </ContactRow>
                <ContactRow label="Instagram">
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold-soft">
                    livingstylestudio
                  </a>
                </ContactRow>
                <ContactRow label="ที่อยู่">
                  179/54 พหลโยธิน 75 แขวงสนามบิน เขตดอนเมือง กรุงเทพฯ 10210
                </ContactRow>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-forest text-ivory/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-ivory/10 px-5 py-8 text-xs md:flex-row md:justify-between md:px-8">
          <p className="font-display tracking-[0.2em]">LIVINGSTYLE STUDIO CO., LTD.</p>
          <p>© 2026 Living Style Studio · Homestyling กรุงเทพฯ</p>
        </div>
      </footer>
    </>
  );
}

function LineButton({ size = "md", tone = "dark" }: { size?: "sm" | "md"; tone?: "dark" | "light" }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-normal whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";
  const sizes = size === "sm" ? "px-4 py-2 text-sm" : "px-7 py-3.5 text-base";
  const tones =
    tone === "light"
      ? "bg-ivory text-forest hover:bg-gold-soft"
      : "bg-forest text-ivory hover:bg-forest-soft";
  return (
    <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className={`${base} ${sizes} ${tones}`}>
      <IconChat />
      ทักไลน์เลย
    </a>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="font-display text-eyebrow text-gold">{children}</p>;
}

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-title font-normal text-forest">{title}</h2>
    </div>
  );
}

function ContactRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <li className="grid grid-cols-[6rem_1fr] gap-4 border-b border-ivory/10 pb-5">
      <span className="text-ivory/50">{label}</span>
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}

/* ภาพประกอบส่วนหัว: รูปทรงโค้งแทนรูปถ่าย */
function HeroArt() {
  return (
    <div aria-hidden className="relative mx-auto aspect-[4/5] w-full max-w-[15rem] md:max-w-none">
      <div className="absolute inset-x-6 top-0 bottom-10 rounded-t-full bg-sand" />
      <div className="absolute inset-x-14 top-10 bottom-10 rounded-t-full bg-gradient-to-b from-ivory to-sand/40" />
      <div className="absolute right-2 bottom-24 h-28 w-28 rounded-full bg-gold-soft/50" />
      <div className="absolute bottom-10 left-1/2 h-40 w-px -translate-x-1/2 bg-forest/30" />
      <svg viewBox="0 0 120 160" className="absolute bottom-10 left-1/2 h-48 w-36 -translate-x-1/2 text-forest">
        <path d="M60 160 C60 120 60 90 60 40" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M60 110 C40 100 28 84 26 64 C46 70 58 86 60 110Z" fill="currentColor" opacity="0.85" />
        <path d="M60 90 C80 80 92 62 94 42 C74 50 62 66 60 90Z" fill="currentColor" opacity="0.7" />
        <path d="M60 60 C46 50 40 34 42 18 C56 28 62 42 60 60Z" fill="currentColor" opacity="0.55" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-10 rounded-sm bg-forest" />
      <div className="absolute bottom-10 left-1/2 h-14 w-24 -translate-x-1/2 rounded-b-3xl bg-gold" />
    </div>
  );
}

function IconChat() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 4c-4.97 0-9 3.13-9 7 0 2.4 1.55 4.52 3.92 5.78L6 20l3.73-2.2c.74.13 1.5.2 2.27.2 4.97 0 9-3.13 9-7s-4.03-7-9-7Z" />
    </svg>
  );
}

function IconLeaf() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M6 26C6 14 14 6 27 5c0 13-8 21-21 21Z" />
      <path d="M6 26 18 14" />
    </svg>
  );
}

function IconEye() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M3 16s5-9 13-9 13 9 13 9-5 9-13 9S3 16 3 16Z" />
      <circle cx="16" cy="16" r="4" />
    </svg>
  );
}

function IconHome() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M5 14 16 5l11 9v13H5V14Z" />
      <path d="M13 27v-8h6v8" />
    </svg>
  );
}
