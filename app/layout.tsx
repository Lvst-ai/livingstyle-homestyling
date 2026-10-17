import type { Metadata } from "next";
import { Prompt, Questrial } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500"],
});

const questrial = Questrial({
  variable: "--font-questrial",
  subsets: ["latin"],
  weight: "400",
});

const title = "Homestyling โดย Living Style Studio | แต่งบ้านให้ลงตัวในวันเดียว";
const description =
  "Homestylist คัดสรรและจัดวางของตกแต่ง ดอกไม้ และต้นไม้ให้เข้ากับพื้นที่และรสนิยมของคุณ ดูแลครบจนจบงานภายในวันเดียว ในกรุงเทพฯ";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "Living Style Studio",
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${prompt.variable} ${questrial.variable} antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
