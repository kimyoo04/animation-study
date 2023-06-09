import "./globals.css";
import Fonts from "@/src/components/Fonts";
import SideBar from "@/src/components/SideBar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex text-white bg-gray-800">
        <Fonts>
          {/* 메인 영역 */}
          <div className="w-screen h-screen">{children}</div>

          {/* 사이드바 */}
          <SideBar />
        </Fonts>
      </body>
    </html>
  );
}
