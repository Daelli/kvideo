import type { VideoSource } from '@/lib/types';

// Default predefined video sources - Real Chinese video APIs
export const DEFAULT_SOURCES: VideoSource[] = [];

// Built-in subscriptions loaded when no SUBSCRIPTION_SOURCES env is set
export const DEFAULT_SUBSCRIPTIONS: { name: string; url: string }[] = [
  { name: '内置源', url: 'https://dl.kstore.dev/download/8359/kvideo.json' },
];
