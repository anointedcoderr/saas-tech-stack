'use client';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  cn,
} from '@anointedcoder/ui';
import { useUser } from '@clerk/nextjs';
import { zodResolver } from '@hookform/resolvers/zod';
import { BookOpen, GraduationCap } from 'lucide-react';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { roleSelectSchema, type RoleSelectInput } from '@/features/auth/schemas/role-select';
import { defaultDashboardForRole } from '@/lib/auth/roles';

const options: Array<{
  value: RoleSelectInput['role'];
  title: string;
  description: string;
  icon: typeof BookOpen;
}> = [
  {
    value: 'STUDENT',
    title: 'I am a student',
    description: 'Subscribe to attend live group classes and follow structured courses.',
    icon: GraduationCap,
  },
  {
    value: 'TUTOR',
    title: 'I am a tutor',
    description: 'Teach one subject deeply, host live group classes, and publish courses.',
    icon: BookOpen,
  },
];

export function RoleSelectForm() {
  const router = useRouter();
  const { user } = useUser();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<RoleSelectInput>({
    resolver: zodResolver(roleSelectSchema),
    defaultValues: { role: 'STUDENT' },
  });

  const onSubmit = async (values: RoleSelectInput) => {
    const response = await fetch('/api/role-select', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      const body = (await response.json().catch(() => null)) as { message?: string } | null;
      toast.error(body?.message ?? 'Could not save role. Please try again.');
      return;
    }

    if (user) {
      await user.reload();
    }
    toast.success('Welcome aboard');
    router.replace(defaultDashboardForRole(values.role));
    router.refresh();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Choose your role</CardTitle>
        <CardDescription>
          Tell us how you will use AnointedCoder. Admin roles are assigned by the platform team.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Controller
            control={control}
            name="role"
            render={({ field }) => (
              <div className="grid gap-3" role="radiogroup">
                {options.map((option) => {
                  const Icon = option.icon;
                  const selected = field.value === option.value;
                  return (
                    <button
                      type="button"
                      key={option.value}
                      role="radio"
                      aria-checked={selected}
                      onClick={() => field.onChange(option.value)}
                      className={cn(
                        'flex items-start gap-3 rounded-lg border p-4 text-left transition-colors',
                        selected
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-foreground/30',
                      )}
                    >
                      <Icon className="text-primary mt-0.5 h-5 w-5" />
                      <span className="flex-1">
                        <span className="block text-sm font-medium">{option.title}</span>
                        <span className="text-muted-foreground mt-1 block text-sm">
                          {option.description}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : 'Continue'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
