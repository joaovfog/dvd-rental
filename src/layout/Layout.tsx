import { Content } from "./Content";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export const AppLayout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          height: "100vh",
        }}
      >
        <Sidebar />
        <Content>{children}</Content>
      </div>
    </div>
  );
};
