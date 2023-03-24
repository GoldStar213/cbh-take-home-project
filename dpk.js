const crypto = require("crypto");

const getPartitionKey = (event) => {
  if (!event) return "0";
  if (event.partitionKey) return event.partitionKey;
  
  const data = JSON.stringify(event);
  const hash = crypto.createHash("sha3-512").update(data).digest("hex");
  
  return hash.length > 256 ? crypto.createHash(hash).digest("hex") : hash;
}

exports.deterministicPartitionKey = getPartitionKey;