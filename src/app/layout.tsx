import Nav from "@/components/navbar/Nav";
import "./globals.css";
import { Nunito } from "next/font/google";
import Context from "@/context/ToogleContext";
import LayoutBoxes from "@/components/LayoutBoxes";
import getCurrentUser from "@/actions/getUser";

const metaFont = Nunito({
  subsets: ["latin"],
});
export const metadata = {
  title: "Airbnb-clone",
  description: "Wellcome to Airbnb",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={metaFont.className}>
        <LayoutBoxes currentUser={currentUser} />
        {children}
      </body>
    </html>
  );
}
