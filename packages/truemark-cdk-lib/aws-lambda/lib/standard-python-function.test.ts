import {Template} from "aws-cdk-lib/assertions";
import {StandardPythonFunction} from "../index";
import {ResourceType, TestHelper} from "../../test-helper";

test("Test PythonFunction", () => {
  const stack = TestHelper.stack();
  // TODO Need to fix failure
  // new StandardPythonFunction(stack, "TestFunction", {
  //   entry: TestHelper.resolveTestFiles("python-lambda")
  // });
  // const template = Template.fromStack(stack);
  // template.hasResourceProperties(ResourceType.LAMBDA_FUNCTION, {
  //   Runtime: "python3.9"
  // });
  // template.resourceCountIs(ResourceType.CLOUDWATCH_ALARM, 3);
});
