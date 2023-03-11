const { Client } = require('pg');

export async function executeQuery(sql: string, parameters: any[]) {
  const client = new Client();
  await client.connect();

  const res = await client.query(sql, parameters);
  await client.end();

  return res;
}
