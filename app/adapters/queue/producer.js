const Kafka = require("kafka-node");
const config = require("./config");
const jsonData = require("./sensordata.js");

const Producer = Kafka.Producer;
const client = new Kafka.KafkaClient({ kafkaHost: config.KafkaHost });
const producer = new Producer(client, { requireAcks: 0, partitionerType: 2 });

const topicToCreate = [
  {
    topic: config.KafkaTopic,
    partitions: 1,
    replicationFactor: 1
  }
];

client.createTopics(topicToCreate, (error, result) => {
  // result is an array of any errors if a given topic could not be created
  console.log(result, "topic created successfully");
});

const pushDataToKafka = (dataToPush) => {
  try {
    let payloadToKafkaTopic = [
      { topic: config.KafkaTopic, messages: JSON.stringify(dataToPush) }
    ];
    console.log(payloadToKafkaTopic);
    producer.on("ready", async function () {
      producer.send(payloadToKafkaTopic, (err, data) => {
        console.log("data: ", data);
      });

      producer.on("error", function (err) {
        //  handle error cases here
      });
    });
  } catch (error) {
    console.log(error);
  }
};

pushDataToKafka(jsonData);
