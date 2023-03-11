export async function executeQuery(sql: string, parameters: []) {
  const { Client } = require('pg');
  const client = new Client();
  await client.connect();
  
  const res = await client.query(sql, parameters);
  await client.end();

  return res;
}
