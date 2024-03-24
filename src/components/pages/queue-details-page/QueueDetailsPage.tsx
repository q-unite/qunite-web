import { lazy, Suspense } from "react";

import { Flex } from "@/components/common/ui";
import Header from "./components/header";
import Main from "./components/main";
import QueueDetailsPageSkeleton from "./skeleton/QueueDetailsPageSkeleton";

const QueueProvider = lazy(() => import("@/hooks/use-queue/use-queue-context"));

const QueueDetailsPage = (): JSX.Element => {
  return (
    <Suspense fallback={<QueueDetailsPageSkeleton />}>
      <QueueProvider>
        <Flex style={{ gap: "20px" }}>
          <Header />
          <Main />
        </Flex>
      </QueueProvider>
    </Suspense>
  );
};

export default QueueDetailsPage;
