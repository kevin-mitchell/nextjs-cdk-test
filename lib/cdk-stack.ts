import { Stack, StackProps } from "aws-cdk-lib";
import { Nextjs } from "cdk-nextjs-standalone";
import { Construct } from "constructs";

export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new Nextjs(this, "Web", {
      nextjsPath: "./web", // relative path to nextjs project root
    });
  }
}
