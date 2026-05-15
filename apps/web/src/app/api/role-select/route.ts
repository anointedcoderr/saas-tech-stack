import { auth, clerkClient } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

import { roleSelectSchema } from '@/features/auth/schemas/role-select';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ message: 'Unauthenticated' }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'Invalid JSON body' }, { status: 400 });
  }

  const parsed = roleSelectSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: 'Invalid role', details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const existing = await clerkClient().users.getUser(userId);
  const existingRole = (existing.publicMetadata as { role?: unknown } | undefined)?.role;
  if (existingRole && existingRole !== parsed.data.role) {
    // Once a role is set, students and tutors cannot swap themselves. Admins must intervene.
    return NextResponse.json(
      { message: 'Role already assigned. Contact support to change roles.' },
      { status: 409 },
    );
  }

  await clerkClient().users.updateUserMetadata(userId, {
    publicMetadata: {
      role: parsed.data.role,
      onboarded: true,
    },
  });

  return NextResponse.json({ data: { role: parsed.data.role } });
}
