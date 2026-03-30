import { useQuery } from "@tanstack/react-query";
import type { EditorFeature, Product } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllProducts() {
  const { actor, isFetching } = useActor();
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllProducts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetEditorFeatures() {
  const { actor, isFetching } = useActor();
  return useQuery<EditorFeature[]>({
    queryKey: ["editorFeatures"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllEditorFeatures();
    },
    enabled: !!actor && !isFetching,
  });
}
