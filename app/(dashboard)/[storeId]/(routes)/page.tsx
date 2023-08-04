import prismadb from "@/lib/prismadb";
import React from "react";

interface DashboardPageProps {
  params: { storeId: string };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return (
    <div>
      Active Store: <strong className="text-cyan-600">{store?.name}</strong>
    </div>
  );
};

export default DashboardPage;
