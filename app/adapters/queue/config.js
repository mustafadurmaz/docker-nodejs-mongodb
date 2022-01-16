require("dotenv").config();

const config = {
  KafkaHost: "kafka:9092",
  KafkaTopic: "kafka-example-topic"
};

module.exports = config;
