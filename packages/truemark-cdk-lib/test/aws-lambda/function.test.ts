import * as path from "path";
import {ResourceType, TestHelper} from "../test-helper";
import {Template} from "aws-cdk-lib/assertions";
import {Function} from "../../aws-lambda";
import {Code, Runtime} from "aws-cdk-lib/aws-lambda";

test("Test Function", () => {
  const stack = TestHelper.stack();
  new Function(stack, "TestFunction", {
    runtime: Runtime.PYTHON_3_9,
    code: Code.fromAsset(path.join(__dirname, "python-lambda")),
    handler: "handler"
  });
  const template = Template.fromStack(stack);
  template.hasResourceProperties(ResourceType.LAMBDA_FUNCTION, {
    Runtime: "python3.9"
  });
  template.resourceCountIs(ResourceType.CLOUDWATCH_ALARM, 3);
});
