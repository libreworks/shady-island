const AWS = require("aws-sdk");
const ec2 = new AWS.EC2();

exports.handler = async (event, context) => {
  if (event.requestType !== "Create") {
    return;
  }
  const subnetIds = JSON.parse(process.env.SUBNET_IDS);
  const responses = Promise.all(
    subnetIds.map((s) =>
      ec2
        .modifySubnetAttribute({
          subnetId: s,
          assignIpv6AddressOnCreation: true,
        })
        .promise()
    )
  );
  return {
    PhysicalResourceId: `EnableIpv6:${subnetIds.join(",")}`,
    Data: { SubnetIds: subnetIds },
  };
};
