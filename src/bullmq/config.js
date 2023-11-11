const CONNECTOR = {
  host: 'localhost',
  port: 6379,
  password: "eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81"
};

const DEFAULT_REMOVE_CONFIG = {
  removeOnComplete: {
    age: 3600,
  },
  removeOnFail: {
    age: 24 * 3600,
  },
};
module.exports = { CONNECTOR, DEFAULT_REMOVE_CONFIG };