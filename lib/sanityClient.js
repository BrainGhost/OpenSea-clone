import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "kqmm1y6p",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "sk3ZddA9qdV4RxNp3VqEdBEv2rYSJOzkyzQ83srXuPnOxKmlC2khW2c3eI5TJcDrlQx3WUOkDI5vnNqKUa6JJBHgoQ5Qx9G3EYiHQvzQgiNKqapAZQdJx13DaKprNZHqQCMk89imhbUTtZBJ3EtWbXlA8gUdliXbejhBsAbuo5mG7J4VGzSL",
  useCdn: false,
});
