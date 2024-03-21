import { useQuery } from "@tanstack/react-query";
import { fetchAttractions, fetchDetailsAttractions } from "../../lib/api";
import { Attraction, EmbeddedData } from "../../types/type";

export const useAttractionList = (keyword: string) => {
  return useQuery<EmbeddedData, Error>({
    queryKey: ["attractions", keyword],
    queryFn: () => fetchAttractions(keyword),
    enabled: true,
  });
};

export const useAttraction = (id: string) => {
  return useQuery<Attraction, Error>({
    queryKey: ["attractions", id],
    queryFn: () => fetchDetailsAttractions(id),
  });
};
