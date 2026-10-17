import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import afterImg from "@/public/images/after.webp";
import beforeImg from "@/public/images/before.webp";
import heroImg from "@/public/images/hero-consult.jpg";
import adviceImg from "@/public/images/homestylist-advice.webp";
import livingImg from "@/public/images/styled-living.jpg";
import stylingDayImg from "@/public/images/styling-day.webp";

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
    image: livingImg,
    alt: "ห้องนั่งเล่นที่ตกแต่งเสร็จ ชั้นวางจัดของตกแต่งและต้นไม้",
  },
  {
    title: "เห็นแนวทางก่อนตัดสินใจ",
    body: "เข้าสำรวจและทดลองจัดวางที่หน้างานจริง กำหนด Mood & Tone ร่วมกันก่อนเริ่มตกแต่ง",
    image: adviceImg,
    alt: "Homestylist ให้คำแนะนำแนวทางการตกแต่งกับลูกค้า",
  },
  {
    title: "ดูแลครบ จบในวันเดียว",
    body: "ทีมงานนำของไปจัดถึงที่ เก็บรายละเอียดและพื้นที่ให้เรียบร้อย คุณไม่ต้องประสานงานเอง",
    image: stylingDayImg,
    alt: "ทีมงานจัดวางของตกแต่งในวัน Styling Day",
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
      <header className="sticky top-0 z-30 border-b border-edge bg-bg/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
          <a href="#top" aria-label="Living Style Studio">
            <Logo className="h-8 w-auto md:h-9" />
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
              <h1 className="mt-5 text-hero font-normal text-fg">
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
                <a href="#price" className="text-sm text-fg underline decoration-yellow/60 underline-offset-8 hover:decoration-yellow">
                  ดูราคาเริ่มต้น
                </a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-sm md:max-w-none">
              <div aria-hidden className="absolute -right-3 -bottom-3 h-full w-full rounded-t-full border border-yellow/50" />
              <Photo
                src={heroImg}
                alt="Homestylist ของ Living Style Studio พูดคุยแนวทางการแต่งบ้านกับเจ้าของบ้าน"
                className="aspect-[4/5] rounded-t-full"
                sizes="(min-width: 768px) 45vw, 100vw"
                position="object-[60%_center]"
                eager
              />
            </div>
          </div>
        </section>

        {/* จุดเด่น 3 ข้อ */}
        <section className="bg-surface py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <SectionHead eyebrow="WHY LVST" title="ความต่างที่คุณสัมผัสได้" />
            <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8">
              {highlights.map((h) => (
                <div key={h.title}>
                  <Photo src={h.image} alt={h.alt} className="aspect-[4/5]" sizes="(min-width: 768px) 33vw, 100vw" />
                  <h3 className="mt-6 text-lg font-normal text-fg">{h.title}</h3>
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
              <div className="rounded-sm border border-edge bg-surface-2 p-8 text-fg md:p-10">
                <p className="font-display text-eyebrow text-yellow-soft">STARTING FROM</p>
                <p className="mt-4 text-sm text-fg/70">งบประมาณเริ่มต้นประมาณ</p>
                <p className="mt-1 text-4xl font-light tracking-wide md:text-5xl">
                  150,000 <span className="text-lg">บาท</span>
                </p>
                <dl className="mt-8 space-y-3 border-t border-fg/15 pt-6 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-fg/70">ค่าบริการ Homestyling</dt>
                    <dd>30,000 บาท</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-fg/70">ค่าสินค้า (คิดตามชิ้นที่ใช้จริง)</dt>
                    <dd>120,000 บาท</dd>
                  </div>
                </dl>
                <p className="mt-6 text-sm leading-relaxed text-fg/70">
                  ปรับงบได้ตามขนาดและความต้องการของพื้นที่
                </p>
                <ul className="mt-8 space-y-3 border-t border-fg/15 pt-6">
                  {included.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-display text-eyebrow text-yellow">HOW WE WORK</h3>
                <ol className="mt-6">
                  {steps.map((s, i) => (
                    <li key={s.name} className="flex gap-5 border-b border-edge py-5 first:pt-0">
                      <span className="font-display text-2xl text-yellow">0{i + 1}</span>
                      <div>
                        <p className="font-normal text-fg">{s.name}</p>
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
        <section className="bg-surface-2 py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
            <p className="text-xl text-fg md:text-2xl">ส่งภาพพื้นที่ของคุณมาให้เราดู</p>
            <p className="mt-3 text-body text-muted">
              Homestylist จะแนะนำแนวทางเบื้องต้นให้ โดยไม่มีค่าใช้จ่าย
            </p>
            <div className="mt-8 flex justify-center">
              <LineButton />
            </div>
          </div>
        </section>

        {/* ก่อน / หลัง */}
        <section className="bg-surface py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <SectionHead eyebrow="BEFORE / AFTER" title="บ้านเดิม บรรยากาศใหม่" />
            <p className="mt-4 max-w-xl text-body text-muted">
              ไม่ต้องรีโนเวท แค่เลือกและจัดวางให้ถูกที่ บ้านก็พร้อมอยู่ได้ในวันเดียว
            </p>
            <div className="mt-10 grid max-w-3xl grid-cols-2 gap-3 md:gap-6">
              {[
                { img: beforeImg, label: "BEFORE", alt: "พื้นที่ว่างก่อนใช้บริการ Homestyling" },
                { img: afterImg, label: "AFTER", alt: "พื้นที่เดียวกันหลังตกแต่งโดย Living Style Studio" },
              ].map((b) => (
                <figure key={b.label}>
                  <Photo src={b.img} alt={b.alt} className="aspect-[9/16]" sizes="(min-width: 768px) 384px, 50vw" />
                  <figcaption className="mt-3 font-display text-eyebrow text-yellow">{b.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* เสียงลูกค้า */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <SectionHead eyebrow="CLIENT WORDS" title="เสียงจากเจ้าของบ้าน" />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {reviews.map((r) => (
                <figure key={r.name} className="rounded-sm border border-edge bg-surface p-7 md:p-9">
                  <span aria-hidden className="font-display text-4xl leading-none text-yellow-soft">
                    &ldquo;
                  </span>
                  <blockquote className="mt-2 text-body text-fg/90">{r.quote}</blockquote>
                  <figcaption className="mt-5 text-sm">
                    <span className="text-fg">{r.name}</span>
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
        <section className="bg-surface py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <SectionHead eyebrow="FAQ" title="คำถามที่พบบ่อย" />
            <div className="mt-10 border-t border-edge">
              {faqs.map((f) => (
                <details key={f.q} className="group border-b border-edge">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-fg">
                    <span>{f.q}</span>
                    <span
                      aria-hidden
                      className="text-xl font-light text-yellow transition-transform group-open:rotate-45"
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
        <section id="contact" className="bg-surface-2 py-20 text-fg md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <p className="font-display text-eyebrow text-yellow-soft">CONTACT</p>
                <h2 className="mt-4 text-title font-normal">เริ่มจากบทสนทนาสั้น ๆ</h2>
                <p className="mt-4 max-w-md text-body text-fg/75">
                  ส่งรูปบ้านและบอกสไตล์ที่ชอบ แล้วเราจะนัดพูดคุยแนวทางที่เหมาะกับคุณที่สุด
                </p>
                <div className="mt-8">
                  <LineButton />
                </div>
              </div>

              <ul className="space-y-5 text-sm md:pt-10">
                <ContactRow label="LINE">
                  <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-soft">
                    @Livingstyle
                  </a>
                </ContactRow>
                <ContactRow label="โทร">
                  {PHONES.map((p, i) => (
                    <span key={p.href}>
                      {i > 0 && <span className="mx-2 text-fg/40">/</span>}
                      <a href={p.href} className="hover:text-yellow-soft">
                        {p.label}
                      </a>
                    </span>
                  ))}
                </ContactRow>
                <ContactRow label="Facebook">
                  <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-soft">
                    LivingstyleStudio
                  </a>
                </ContactRow>
                <ContactRow label="Instagram">
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-soft">
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

      <footer className="bg-surface-2 text-fg/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-fg/10 px-5 py-8 text-xs md:flex-row md:justify-between md:px-8">
          <Logo className="h-7 w-auto" />
          <p>© 2026 Living Style Studio · Homestyling กรุงเทพฯ</p>
        </div>
      </footer>
    </>
  );
}

function LineButton({ size = "md" }: { size?: "sm" | "md" }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-normal whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green";
  const sizes = size === "sm" ? "px-4 py-2 text-sm" : "px-7 py-3.5 text-base";
  const tones = "bg-green text-bg hover:bg-green-soft";
  return (
    <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className={`${base} ${sizes} ${tones}`}>
      <IconChat />
      ทักไลน์เลย
    </a>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="font-display text-eyebrow text-yellow">{children}</p>;
}

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-title font-normal text-fg">{title}</h2>
    </div>
  );
}

function ContactRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <li className="grid grid-cols-[6rem_1fr] gap-4 border-b border-fg/10 pb-5">
      <span className="text-fg/50">{label}</span>
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}

function IconChat() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 4c-4.97 0-9 3.13-9 7 0 2.4 1.55 4.52 3.92 5.78L6 20l3.73-2.2c.74.13 1.5.2 2.27.2 4.97 0 9-3.13 9-7s-4.03-7-9-7Z" />
    </svg>
  );
}

function Photo({
  src,
  alt,
  className = "",
  sizes,
  position = "object-center",
  eager = false,
}: {
  src: StaticImageData;
  alt: string;
  className?: string;
  sizes: string;
  position?: string;
  eager?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden bg-surface-2 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        placeholder="blur"
        className={`object-cover ${position}`}
        {...(eager ? { loading: "eager" as const, fetchPriority: "high" as const } : {})}
      />
    </div>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/logo-livingstyle.svg"
      alt="Living Style Studio"
      width={150}
      height={40}
      unoptimized
      className={className}
    />
  );
}
