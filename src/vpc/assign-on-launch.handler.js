const AWS = require("aws-sdk");
const ec2 = new AWS.EC2();

exports.handler = async (event, context) => {
  if (event.RequestType !== "Create") {
    return;
  }
  const subnetIds = JSON.parse(process.env.SUBNET_IDS);
  const responses = await Promise.all(
    subnetIds.map((s) =>
      ec2
        .modifySubnetAttribute({
          SubnetId: s,
          AssignIpv6AddressOnCreation: { Value: true },
        })
        .promise()
    )
  );
  return {
    PhysicalResourceId: `EnableIpv6:${subnetIds.join(",")}`,
    Data: { SubnetIds: subnetIds },
  };
};
