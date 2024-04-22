import ChakraTemplate from "../layout/ChakraTemplate";
import ResumeState from "./../context/ResumeState";
import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <ChakraTemplate>
          <ResumeState>{children}</ResumeState>
        </ChakraTemplate>
      </body>
    </html>
  );
}
