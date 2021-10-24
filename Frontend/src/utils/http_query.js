const http = require('http');

const data = JSON.stringify({
  query: `{
    accounts {username}
  }`
});

const options = {
  hostname: 'backend',
  path: '/graphql',
  port: 8000,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
    'User-Agent': 'Node'
  }
};

const req = http.request(options, (res) => {
  let data = '';
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', (d) => {
    data += d;
  });

  res.on('end', () => {
    console.log(JSON.parse(data).data);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.write(data);
req.end();
