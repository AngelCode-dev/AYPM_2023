import { writable } from "svelte/store";

export const page = writable()
export const page_name = writable("loading...")
export const page_changed = writable(false) 