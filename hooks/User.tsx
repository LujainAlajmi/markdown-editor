import { useQuery } from "@tanstack/react-query";
export const useUser = () => {
  const { data, isLoading, error } = useQuery(["user"], () =>
    fetch("/api/user").then((res) => res.json())
  );
  return { data, isLoading, error };
};
