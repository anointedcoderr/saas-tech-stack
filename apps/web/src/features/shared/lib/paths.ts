/**
 * Single source of truth for app routes. Never hardcode route strings in
 * components; import from here so renames stay safe.
 */
export const paths = {
  public: {
    landing: '/landing',
    pricing: '/pricing',
    about: '/about',
    tutorsDirectory: '/tutors',
  },
  auth: {
    signIn: '/sign-in',
    signUp: '/sign-up',
    roleSelect: '/role-select',
  },
  student: {
    dashboard: '/student/dashboard',
    classes: '/student/classes',
    profile: '/student/profile',
  },
  tutor: {
    dashboard: '/tutor/dashboard',
    profile: '/tutor/profile',
    courses: '/tutor/courses',
  },
  admin: {
    dashboard: '/admin/dashboard',
    users: '/admin/users',
    tutors: '/admin/tutors',
  },
  superAdmin: {
    dashboard: '/super-admin/dashboard',
    admins: '/super-admin/admins',
    audit: '/super-admin/audit',
  },
} as const;
