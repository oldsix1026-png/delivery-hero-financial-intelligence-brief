import { createReadStream, existsSync, statSync } from 'node:fs'
import { createServer } from 'node:http'
import { dirname, extname, join, normalize, resolve } from 'node:path'
import { exec } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)))
const port = 4179

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
}

function fileFor(url) {
  const cleanUrl = decodeURIComponent(url.split('?')[0])
  const requested = cleanUrl === '/' ? '/index.html' : cleanUrl
  const normalized = normalize(requested).replace(/^(\.\.[/\\])+/, '')
  const target = resolve(join(root, normalized))
  return target.startsWith(root) ? target : join(root, 'index.html')
}

const server = createServer((req, res) => {
  const target = fileFor(req.url ?? '/')
  const file = existsSync(target) && statSync(target).isFile() ? target : join(root, 'index.html')
  res.setHeader('Content-Type', types[extname(file)] ?? 'application/octet-stream')
  createReadStream(file).pipe(res)
})

server.listen(port, '127.0.0.1', () => {
  const url = `http://127.0.0.1:${port}/`
  console.log(`Delivery Hero dashboard preview: ${url}`)
  exec(`start "" "${url}"`)
})
