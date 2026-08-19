"use client";
import React from "react";
import { API_MANAGER } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

const page = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: API_MANAGER.fetchTodos,
  });

  console.log("data ,", data?.data);
  return (
    <div className="p-4 justify-between items-center w-full h-full">
      <h1>React Query Learnings !</h1>
    </div>
  );
};

export default page;
