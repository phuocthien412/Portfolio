import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchProfile, fetchSkills, fetchJourney, fetchProjects, submitContact } from "../services/api";
import type { ContactFormInput } from "../types";

export function useProfile() {
  return useQuery({
    queryKey: ["profile"],
    queryFn: fetchProfile,
    staleTime: 1000 * 60 * 10,
  });
}

export function useSkills() {
  return useQuery({
    queryKey: ["skills"],
    queryFn: fetchSkills,
    staleTime: 1000 * 60 * 10,
  });
}

export function useJourney() {
  return useQuery({
    queryKey: ["journey"],
    queryFn: fetchJourney,
    staleTime: 1000 * 60 * 10,
  });
}

export function useProjects(category?: string) {
  return useQuery({
    queryKey: ["projects", category],
    queryFn: () => fetchProjects(category),
    staleTime: 1000 * 60 * 5,
  });
}

export function useSubmitContact() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: ContactFormInput) => submitContact(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["messages"] });
    },
  });
}
