// Backwards-compatible re-export.
//
// Blog content now lives in ./blog/* cluster files (routes, destinations,
// yacht, events, hotels, guides, services-explained) aggregated by ./blog.
// This shim preserves the historical "../data/blog-posts" import path so no
// consuming component needs to change.
export * from "./blog";
