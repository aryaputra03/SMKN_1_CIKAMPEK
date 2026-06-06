const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export async function fetchAPI<T>(
  endpoint: string,
  params?: Record<string, string>
): Promise<T> {
  const query = params ? "?" + new URLSearchParams(params).toString() : "";
  const res = await fetch(`${API_URL}/api${endpoint}${query}`, {
    headers: { "Content-Type": "application/json" },
    next: { revalidate: 60 }, // ISR: revalidate setiap 60 detik
  });

  if (!res.ok) {
    throw new Error(`API Error: ${res.status} on ${endpoint}`);
  }

  return res.json();
}