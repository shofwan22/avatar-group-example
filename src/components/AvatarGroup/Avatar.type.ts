export type Size = 'xs' | 'sm' | 'md' | 'lg';

export interface User {
  name: string;
  image?: string;
}

export interface AvatarGroupProps {
  maxLength: number;
  size: Size;
  users: User[];
}
