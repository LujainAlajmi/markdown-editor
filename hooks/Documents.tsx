import { useTitle } from "@/TitleContext";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

export const useDocument = (id: string) => {
  const { setTitle, setContent } = useTitle();
  const { data, isLoading, error } = useQuery(
    ["document", id],
    () => fetch(`/api/document/${id}`).then((res) => res.json()),
    {
      onSuccess: (data) => {
        console.log(data);
        setTitle(data[0].title);
        setContent(data[0].content);
      },
    }
  );
  return { data, isLoading, error };
};

export const useCreateDocument = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { data, isLoading, error, mutate } = useMutation(
    (data: { title: string; content: string }) =>
      fetch("/api/document", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json()),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["user"]);
        router.push(`/document/${data.id}`);

        console.log(data);
      },
    }
  );
  return { data, isLoading, error, mutate };
};

export const useUpdateDocument = (id: string) => {
  const queryClient = useQueryClient();
  const { data, isLoading, error, mutate } = useMutation(
    (data: { title: string; content: string }) =>
      fetch(`/api/document/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json()),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["document", id]);
        console.log(data);
      },
    }
  );
  return { data, isLoading, error, mutate };
};

export const useDeleteDocument = (id: string) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { data, isLoading, error, mutate } = useMutation(
    () =>
      fetch(`/api/document/${id}`, {
        method: "DELETE",
      }).then((res) => res.json()),
    {
      onSuccess: (data) => {
        router.push(`/document/new`);
        queryClient.invalidateQueries(["user"]);
        console.log(data);
      },
    }
  );
  return { data, isLoading, error, mutate };
};
