import { AppLayout } from "../layout/Layout";
import { WebRoutes } from "./web.route";

export const Routes: React.FC = () => {
  return (
    <AppLayout>
      <WebRoutes />
    </AppLayout>
  );
};
