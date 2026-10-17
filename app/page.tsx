import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import afterImg from "@/public/images/after.webp";
import beforeImg from "@/public/images/before.webp";
import consultImg from "@/public/images/hero-consult.jpg";
import heroImg from "@/public/images/hero-room.webp";
import reviewImg from "@/public/images/review-noon-top.jpg";
import livingImg from "@/public/images/styled-living.jpg";
import stylingDayImg from "@/public/images/styling-day.webp";
import stylingTeamImg from "@/public/images/styling-team.webp";
import teamLivingImg from "@/public/images/team-living.webp";

const LINE_URL = "https://line.me/R/ti/p/@livingstyle";
const PHONES = [
  { label: "086-669-9099", href: "tel:0866699099" },
  { label: "084-675-4046", href: "tel:0846754046" },
];
const FACEBOOK_URL = "https://www.facebook.com/LivingstyleStudio";
const INSTAGRAM_URL = "https://www.instagram.com/livingstylestudio";

const nav = [
  { label: "วิธีทำงาน", href: "#how" },
  { label: "ราคา", href: "#price" },
  { label: "ผลงาน", href: "#work" },
  { label: "รีวิว", href: "#reviews" },
  { label: "คำถาม", href: "#faq" },
];

const steps: { name: string; body: string; icon: IconName }[] = [
  { name: "ส่งภาพพื้นที่", body: "ส่งรูปบ้านและบรรยากาศที่อยากได้ทางไลน์", icon: "camera" },
  { name: "กำหนดแนวทาง", body: "สำรวจหน้างาน ทดลองจัดวาง เลือก Mood & Tone", icon: "eye" },
  { name: "Styling Day", body: "ทีมงานพร้อม Homestylist ตกแต่งจริงในวันเดียว", icon: "spark" },
  { name: "เก็บรายละเอียด", body: "ปรับจุดสุดท้ายให้ลงตัว พร้อมสรุปรายการของ", icon: "check" },
];

const included: { label: string; icon: IconName }[] = [
  { label: "Homestylist ดูแลแนวทางตลอดงาน", icon: "person" },
  { label: "พร็อพ รูปภาพ หมอน พรม และน้ำหอม", icon: "lamp" },
  { label: "ดอกไม้และต้นไม้ประดิษฐ์เกรดพรีเมียม", icon: "leaf" },
  { label: "ทีมงานจัดวางและเก็บงานถึงที่", icon: "home" },
];

const benefits: { title: string; body: string; icon: IconName }[] = [
  {
    title: "คัดสรรด้วยรสนิยม",
    body: "Homestylist เลือกทุกชิ้นให้เข้ากับพื้นที่และตัวตนของคุณ ไม่ใช่แค่ซื้อมาวาง",
    icon: "leaf",
  },
  {
    title: "เห็นแนวทางก่อนตัดสินใจ",
    body: "ทดลองจัดวางที่หน้างานจริง กำหนด Mood & Tone ร่วมกันก่อนเริ่มตกแต่ง",
    icon: "eye",
  },
  {
    title: "ดูแลครบ จบในวันเดียว",
    body: "ทีมงานนำของไปจัดถึงที่และเก็บพื้นที่ให้เรียบร้อย คุณไม่ต้องประสานงานเอง",
    icon: "home",
  },
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
    quote: "บ้านมีพร๊อพ เนี่ยมันสวยขึ้นจริงๆ ดอกไม้ และ ต้นไม้เหมือนจริงมาก ต้องพี่จิ๋มเท่านั้น",
    name: "คุณกระแต",
    role: "Kathyamrez",
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
    q: "เหมาะกับพื้นที่แบบไหน",
    a: "บ้านและคอนโดใหม่ บ้านรีโนเวท บ้านตัวอย่าง บ้านปล่อยเช่า รวมถึงคาเฟ่ ออฟฟิศ และโรงแรม",
  },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-30 border-b border-edge bg-bg/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3 md:px-8">
          <a href="#top" aria-label="Living Style Studio">
            <Logo className="h-8 w-auto md:h-9" />
          </a>
          <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-fg">
                {n.label}
              </a>
            ))}
          </nav>
          <LineButton size="sm" />
        </div>
      </header>

      <main id="top">
        {/* ภาพเต็มจอ */}
        <section className="relative flex min-h-[560px] items-center justify-center overflow-hidden md:h-[86vh]">
          <Image
            src={heroImg}
            alt="ห้องนั่งเล่นที่ตกแต่งโดย Living Style Studio"
            fill
            sizes="100vw"
            placeholder="blur"
            loading="eager"
            fetchPriority="high"
            className="object-cover"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/55 to-bg" />
          <div className="relative mx-auto max-w-3xl px-5 py-24 text-center">
            <Eyebrow>HOMESTYLING · BANGKOK</Eyebrow>
            <h1 className="mt-5 text-hero font-light text-fg">
              บ้านที่ลงตัว
              <br />
              ในแบบที่เป็นคุณ
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lead text-fg/80">
              Homestylist คัดสรรและจัดวางทุกชิ้นให้เข้ากับพื้นที่และรสนิยมของคุณ ดูแลครบจนจบงานภายในวันเดียว
            </p>
            <div className="mt-10 flex justify-center">
              <LineButton />
            </div>
          </div>
          <div className="absolute bottom-6 left-5 hidden rounded-sm border border-yellow/40 bg-bg/70 px-4 py-3 text-center backdrop-blur md:left-8 md:block">
            <p className="font-display text-2xl text-yellow">1 DAY</p>
            <p className="font-display text-[0.625rem] tracking-[0.2em] text-fg/70">MAKEOVER</p>
          </div>
        </section>

        {/* วิธีทำงาน */}
        <section id="how" className="scroll-mt-16 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <SectionHead
              title="วิธีทำงาน: ง่ายใน 4 ขั้นตอน"
              sub="คุณบอกบรรยากาศที่อยากได้ ที่เหลือเราดูแลจนจบงาน"
            />
            <Photo
              src={stylingTeamImg}
              alt="ทีมงาน Living Style Studio จัดวางของตกแต่งในห้องนั่งเล่น"
              className="mt-12 aspect-[16/10] rounded-xl md:aspect-[21/9]"
              sizes="(min-width: 1152px) 1088px, 100vw"
            />
            <ol className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.name} className="text-center">
                  <Icon name={s.icon} className="mx-auto h-9 w-9 text-yellow" />
                  <p className="mt-4 text-fg">
                    <span className="mr-2 font-display text-yellow">0{i + 1}</span>
                    {s.name}
                  </p>
                  <p className="mx-auto mt-2 max-w-[14rem] text-sm leading-relaxed text-muted">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* คำพูดลูกค้า */}
        <section className="bg-surface py-16 md:py-20">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-5 md:flex-row md:gap-12 md:px-8">
            <Photo
              src={reviewImg}
              alt="คุณนุ่น คุณท๊อป กับทีม Living Style Studio"
              className="aspect-square w-40 shrink-0 rounded-full md:w-48"
              sizes="192px"
              position="object-[50%_30%]"
            />
            <figure className="text-center md:text-left">
              <blockquote className="text-lg leading-relaxed font-light text-fg md:text-xl">
                &ldquo;อีกหนึ่งความประทับใจ คือ ความเป็นมืออาชีพของทีมงาน เพราะสามารถ Set up
                ทุกอย่างให้เสร็จภายในวันเดียวได้&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="text-yellow">— คุณนุ่น คุณท๊อป</span>
                <span className="ml-2 font-display text-xs tracking-widest text-muted uppercase">
                  128 Massage Owner
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ราคา */}
        <section id="price" className="scroll-mt-16 py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <SectionHead title="ราคาที่ชัดเจนตั้งแต่ต้น" sub="งบเริ่มต้นสำหรับบริการ Homestyling ปรับได้ตามขนาดพื้นที่" />
            <div className="mt-12 grid divide-y divide-edge border-y border-edge md:grid-cols-3 md:divide-x md:divide-y-0">
              <PriceCol label="ค่าบริการ" amount="30,000" note="Homestylist ดูแลแนวทางและทีมจัดวาง" />
              <PriceCol label="ค่าสินค้า" amount="120,000" note="คิดตามชิ้นที่ใช้จริง ปรับได้ตามงบ" />
              <PriceCol label="รวมเริ่มต้นประมาณ" amount="150,000" note="ปรับได้ตามขนาดและความต้องการของพื้นที่" highlight />
            </div>
            <div className="mt-10 flex justify-center">
              <LineButton />
            </div>
            <p className="mt-4 text-center text-xs text-muted">ประเมินราคาตามพื้นที่จริงผ่านไลน์</p>

            <div className="mt-16 grid gap-6 rounded-xl border border-edge bg-surface p-7 md:grid-cols-2 md:items-center md:p-10">
              <div>
                <h3 className="text-xl font-light text-fg">อยู่ต่างจังหวัด?</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  เราเดินทางไปให้บริการได้ มีค่าเดินทางตามระยะทาง ส่งโลเคชันมาให้เราประเมินได้
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted">พัทยา</p>
                  <p className="mt-1 text-2xl font-light text-yellow">3,000 ฿</p>
                </div>
                <div>
                  <p className="text-sm text-muted">เขาใหญ่</p>
                  <p className="mt-1 text-2xl font-light text-yellow">5,000 ฿</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* สิ่งที่รวมในบริการ */}
        <section className="bg-surface py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <SectionHead title="สิ่งที่รวมอยู่ในบริการ" sub="ทุกอย่างที่บ้านต้องใช้ ในงานเดียว" />
            <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
              {included.map((item) => (
                <li key={item.label} className="text-center">
                  <Icon name={item.icon} className="mx-auto h-8 w-8 text-green" />
                  <p className="mx-auto mt-4 max-w-[12rem] text-sm leading-relaxed text-fg/85">{item.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ผลงานจริง */}
        <section id="work" className="scroll-mt-16 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <SectionHead title="ผลงานจริงที่เราเปลี่ยนให้" sub="ไม่ต้องรีโนเวท แค่เลือกและจัดวางให้ถูกที่" />
            <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
              <LabeledPhoto src={beforeImg} label="BEFORE" alt="พื้นที่ว่างก่อนใช้บริการ Homestyling" />
              <LabeledPhoto src={afterImg} label="AFTER" alt="พื้นที่เดียวกันหลังตกแต่งโดย Living Style Studio" />
              <div className="col-span-2 grid grid-cols-2 gap-3 md:col-span-1 md:grid-cols-1 md:grid-rows-2 md:gap-5">
                <Photo
                  src={livingImg}
                  alt="ห้องนั่งเล่นโทนน้ำเงินที่ตกแต่งเสร็จ"
                  className="aspect-square rounded-xl md:aspect-auto md:h-full"
                  sizes="(min-width: 768px) 33vw, 50vw"
                />
                <Photo
                  src={stylingDayImg}
                  alt="ทีมงานจัดวางของตกแต่งในวัน Styling Day"
                  className="aspect-square rounded-xl md:aspect-auto md:h-full"
                  sizes="(min-width: 768px) 33vw, 50vw"
                  position="object-[50%_30%]"
                />
              </div>
            </div>
            <div className="mt-12 flex justify-center">
              <LineButton />
            </div>
          </div>
        </section>

        {/* รีวิว */}
        <section id="reviews" className="relative scroll-mt-16 overflow-hidden py-20 md:py-28">
          <Image src={teamLivingImg} alt="" fill sizes="100vw" className="object-cover" />
          <div aria-hidden className="absolute inset-0 bg-bg/85" />
          <div className="relative mx-auto max-w-5xl px-5 md:px-8">
            <SectionHead title="เสียงจากเจ้าของบ้าน" sub="ความรู้สึกจริงจากลูกค้าที่ใช้บริการ Homestyling" />
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {reviews.map((r) => (
                <figure key={r.name} className="rounded-xl border border-edge bg-surface/90 p-7 backdrop-blur md:p-8">
                  <blockquote className="text-body text-fg/90">&ldquo;{r.quote}&rdquo;</blockquote>
                  <figcaption className="mt-5 flex flex-wrap items-center gap-3 text-sm">
                    <span className="h-px w-6 bg-yellow" />
                    <span className="text-fg">{r.name}</span>
                    <span className="font-display text-xs tracking-widest text-muted uppercase">{r.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* จุดเด่น 3 ข้อ */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <SectionHead title="ทำไมต้อง Living Style" />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {benefits.map((b) => (
                <div key={b.title} className="rounded-xl border border-edge bg-surface p-8 text-center">
                  <Icon name={b.icon} className="mx-auto h-9 w-9 text-yellow" />
                  <h3 className="mt-5 text-xl font-light text-fg">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* คำถามที่พบบ่อย */}
        <section id="faq" className="scroll-mt-16 bg-surface py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <SectionHead title="คำถามที่พบบ่อย" />
            <div className="mt-10 border-t border-edge">
              {faqs.map((f) => (
                <details key={f.q} className="group border-b border-edge">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-fg">
                    <span>{f.q}</span>
                    <span aria-hidden className="text-xl font-light text-yellow transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="pb-6 text-body text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* แถบปิดท้าย: รูปซ้าย ข้อความขวา */}
        <section className="grid md:grid-cols-2">
          <Photo
            src={consultImg}
            alt="Homestylist พูดคุยแนวทางการแต่งบ้านกับเจ้าของบ้าน"
            className="aspect-[4/3] md:aspect-auto md:min-h-[480px]"
            sizes="(min-width: 768px) 50vw, 100vw"
            position="object-[60%_center]"
          />
          <div className="flex flex-col items-center justify-center bg-surface-2 px-6 py-16 text-center md:px-12">
            <h2 className="text-title font-light text-fg">
              บ้านที่ใช่
              <br />
              เริ่มจากบทสนทนาสั้น ๆ
            </h2>
            <p className="mt-4 max-w-sm text-body text-muted">
              ส่งรูปพื้นที่มาให้เราดู Homestylist จะแนะนำแนวทางเบื้องต้นให้ โดยไม่มีค่าใช้จ่าย
            </p>
            <div className="mt-8">
              <LineButton />
            </div>
          </div>
        </section>
      </main>

      {/* ติดต่อเรา + ส่วนท้าย */}
      <footer id="contact" className="scroll-mt-16 border-t border-edge bg-bg text-sm">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-4 md:px-8">
          <div>
            <Logo className="h-8 w-auto" />
            <p className="mt-4 leading-relaxed text-muted">สตูดิโอตกแต่งและจัดสไตล์พื้นที่ระดับพรีเมียมในกรุงเทพฯ</p>
          </div>
          <FooterCol title="CONTACT">
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
              LINE: @Livingstyle
            </a>
            {PHONES.map((p) => (
              <a key={p.href} href={p.href} className="hover:text-fg">
                โทร {p.label}
              </a>
            ))}
          </FooterCol>
          <FooterCol title="FOLLOW">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
              Facebook
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
              Instagram
            </a>
          </FooterCol>
          <FooterCol title="STUDIO">
            <p>179/54 พหลโยธิน 75 แขวงสนามบิน เขตดอนเมือง กรุงเทพฯ 10210</p>
          </FooterCol>
        </div>
        <div className="border-t border-edge">
          <p className="mx-auto max-w-6xl px-5 py-6 text-xs text-muted md:px-8">
            © 2026 Livingstyle Studio Co., Ltd. · Homestyling กรุงเทพฯ
          </p>
        </div>
      </footer>
    </>
  );
}

function LineButton({ size = "md" }: { size?: "sm" | "md" }) {
  const sizes = size === "sm" ? "px-4 py-2 text-sm" : "px-8 py-3.5 text-base";
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-green font-normal whitespace-nowrap text-bg transition-colors hover:bg-green-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green ${sizes}`}
    >
      <Icon name="chat" className="h-4 w-4" />
      ทักไลน์เลย
    </a>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="font-display text-eyebrow text-yellow">{children}</p>;
}

function SectionHead({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="text-center">
      <h2 className="text-title font-light text-fg">{title}</h2>
      {sub && <p className="mx-auto mt-3 max-w-xl text-body text-muted">{sub}</p>}
    </div>
  );
}

function PriceCol({
  label,
  amount,
  note,
  highlight = false,
}: {
  label: string;
  amount: string;
  note: string;
  highlight?: boolean;
}) {
  return (
    <div className="px-4 py-8 text-center md:py-10">
      <p className="text-sm text-muted">{label}</p>
      <p className={`mt-3 text-5xl font-light tracking-tight ${highlight ? "text-yellow" : "text-fg"}`}>
        {amount}
        <span className="ml-1 text-lg">฿</span>
      </p>
      <p className="mx-auto mt-3 max-w-[14rem] text-sm leading-relaxed text-muted">{note}</p>
    </div>
  );
}

function LabeledPhoto({ src, label, alt }: { src: StaticImageData; label: string; alt: string }) {
  return (
    <figure className="relative">
      <Photo src={src} alt={alt} className="aspect-[9/16] rounded-xl" sizes="(min-width: 768px) 33vw, 50vw" />
      <figcaption className="absolute top-3 left-3 rounded-full bg-bg/80 px-3 py-1 font-display text-[0.6875rem] tracking-[0.2em] text-yellow">
        {label}
      </figcaption>
    </figure>
  );
}

function FooterCol({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="font-display text-eyebrow text-yellow">{title}</p>
      <div className="mt-4 flex flex-col gap-2 leading-relaxed text-muted">{children}</div>
    </div>
  );
}

function Photo({
  src,
  alt,
  className = "",
  sizes,
  position = "object-center",
}: {
  src: StaticImageData;
  alt: string;
  className?: string;
  sizes: string;
  position?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-surface-2 ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} placeholder="blur" className={`object-cover ${position}`} />
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

type IconName = "camera" | "eye" | "spark" | "check" | "person" | "lamp" | "leaf" | "home" | "chat";

const iconPaths: Record<IconName, ReactNode> = {
  camera: (
    <>
      <path d="M4 9h5l2-3h10l2 3h5v17H4z" />
      <circle cx="16" cy="17" r="5" />
    </>
  ),
  eye: (
    <>
      <path d="M3 16s5-9 13-9 13 9 13 9-5 9-13 9S3 16 3 16Z" />
      <circle cx="16" cy="16" r="4" />
    </>
  ),
  spark: <path d="M16 4v8M16 20v8M4 16h8M20 16h8M8 8l4 4M20 20l4 4M24 8l-4 4M12 20l-4 4" />,
  check: (
    <>
      <circle cx="16" cy="16" r="12" />
      <path d="m10.5 16.5 3.5 3.5 7.5-8" />
    </>
  ),
  person: (
    <>
      <circle cx="16" cy="11" r="5" />
      <path d="M6 28c1-6 5-9 10-9s9 3 10 9" />
    </>
  ),
  lamp: (
    <>
      <path d="M10 5h12l4 10H6z" />
      <path d="M16 15v10M10 27h12" />
    </>
  ),
  leaf: (
    <>
      <path d="M6 26C6 14 14 6 27 5c0 13-8 21-21 21Z" />
      <path d="M6 26 18 14" />
    </>
  ),
  home: (
    <>
      <path d="M5 14 16 5l11 9v13H5V14Z" />
      <path d="M13 27v-8h6v8" />
    </>
  ),
  chat: (
    <path d="M16 5C9.4 5 4 9.2 4 14.3c0 3.2 2 6 5.2 7.7L8 27l5-2.9c1 .2 2 .3 3 .3 6.6 0 12-4.2 12-9.3S22.6 5 16 5Z" />
  ),
};

function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconPaths[name]}
    </svg>
  );
}
