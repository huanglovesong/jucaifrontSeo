/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['it-jucai.suuyuu.cn','jucaisecond.fulu.com',
    'www.fulu.com',
    'fuluapiosstest2018.oss-cn-hangzhou.aliyuncs.com'],
  },
  NODE_ENV: process.env.NODE_ENV
}

module.exports = nextConfig
