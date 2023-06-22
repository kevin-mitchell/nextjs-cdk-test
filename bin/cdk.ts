#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { CdkStack } from "../lib/cdk-stack";

const app = new cdk.App();
new CdkStack(app, "CdkStack", {
  env: { account: "ENTER YOUR ACCOUNT NUMBER HERE", region: "us-east-2" },
});
