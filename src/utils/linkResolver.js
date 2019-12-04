// Link Resolver for Prismic, handles links found in Link or Rich Text field types
const linkResolver = doc => {
  // Pretty URLs for known types
  if (doc.type === "blog") return `/post/${doc.uid}`
  if (doc.type === "page") return `/${doc.uid}`
  // Fallback for other types, in case new custom types get created
  return `/doc/${doc.id}`
}

export default linkResolver
