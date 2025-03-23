import React from "react";
import data from "../data.json";
import ListProduct from "@/components/ListProduct";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: number }>;
}) {
  const { slug } = await params;
  const filterData = data.find((product) => product.id == slug);
  if (!filterData) return <p className="p-16">Post not found</p>;

  return (
    <>
      <ListProduct {...filterData} />
    </>
  );
}
