import { z } from 'zod';

export const ApiErrorSchema = z.object({
  message: z.string(),
  code: z.string().optional(),
  details: z.record(z.unknown()).optional(),
});
export type ApiError = z.infer<typeof ApiErrorSchema>;

export function apiResponseSchema<T extends z.ZodTypeAny>(data: T) {
  return z.object({
    data,
    error: z.null().optional(),
  });
}

export type ApiResponse<T> = {
  data: T;
  error?: null;
};
