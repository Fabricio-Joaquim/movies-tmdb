/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images:{
    domains: ["https://images.unsplash.com", "image.tmdb.org", "upload.wikimedia.org", "https://www.sport-histoire.fr", "www.sport-histoire.fr", "sport-histoire.fr", "sport-histoire"]
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
}

module.exports = nextConfig
