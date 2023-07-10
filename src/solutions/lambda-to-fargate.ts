import { IVpc, VpcProps } from "aws-cdk-lib/aws-ec2";
import { Function, FunctionProps } from "aws-cdk-lib/aws-lambda";
import { Construct, IConstruct } from "constructs";

/**
 * Interface for LambdaToFargate.
 */
export interface ILambdaToFargate extends IConstruct {}

/**
 * Constructor parameters for LambdaToFargate.
 */
export interface LambdaToFargateProps {
  /**
   * Existing instance of Lambda Function object, providing both this and `lambdaFunctionProps` will cause an error.
   *
   * @default - None
   */
  readonly existingLambdaObj?: Function;
  /**
   * Optional user provided props to override the default props for the Lambda function.
   *
   * @default - Default properties are used.
   */
  readonly lambdaFunctionProps?: FunctionProps;
  /**
   * An existing VPC for the construct to use (construct will NOT create a new VPC in this case)
   */
  readonly existingVpc?: IVpc;
  /**
   * Properties to override default properties if deployVpc is true
   */
  readonly vpcProps?: VpcProps;
  /**
   * Whether to deploy a new VPC
   *
   * @default - false
   */
  readonly deployVpc?: boolean;
}

/**
 * An LambdaToFargate.
 */
export class LambdaToFargate extends Construct implements ILambdaToFargate {
  public readonly lambdaFunction: Function;
  public readonly vpc?: IVpc;

  /**
   * Creates a new LambdaToFargate.
   *
   * @param scope - The Construct that contains this one.
   * @param id - The identifier of this construct.
   * @param props - The configuration properties for this construct.
   */
  public constructor(
    scope: IConstruct,
    id: string,
    props: LambdaToFargateProps
  ) {
    super(scope, id);
    const {} = props;

    if (props.deployVpc || props.existingVpc) {
      this.vpc = defaults.buildVpc(scope, {
        defaultVpcProps: defaults.DefaultIsolatedVpcProps(),
        existingVpc: props.existingVpc,
        userVpcProps: props.vpcProps,
        constructVpcProps: {
          enableDnsHostnames: true,
          enableDnsSupport: true,
        },
      });
    }
  }
}
