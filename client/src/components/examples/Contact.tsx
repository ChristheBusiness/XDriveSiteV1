import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Contact from '../Contact'

export default function ContactExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <Contact />
      <Toaster />
    </QueryClientProvider>
  )
}
