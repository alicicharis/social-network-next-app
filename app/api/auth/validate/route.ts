import { signInFormSchema } from "@/lib/zod-schema";

export async function POST(request: Request) {
  const data = await request.json();
  const parsed = signInFormSchema.parse(data);

  if (parsed) {
    return Response.json({ valid: true });
  }

  return Response.json({ valid: false });
}
