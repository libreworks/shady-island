import { App, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { ListenerCondition } from "aws-cdk-lib/aws-elasticloadbalancingv2";
import { Secret } from "aws-cdk-lib/aws-secretsmanager";
import { SecretHttpHeader } from "../../src/networking/secret-http-header";

describe("SecretHttpHeader", () => {
  describe("#headerName", () => {
    test("uses the default header value", () => {
      const app = new App();
      const stack = new Stack(app, "Stack");
      const obj = new SecretHttpHeader(stack, "SecretHeader");
      expect(obj.headerName).toStrictEqual(SecretHttpHeader.defaultHeaderName);
    });

    test("uses the provided header value", () => {
      const app = new App();
      const stack = new Stack(app, "Stack");
      const headerName = "X-Foobar";
      const obj = new SecretHttpHeader(stack, "SecretHeader", {
        headerName,
      });
      expect(obj.headerName).toStrictEqual(headerName);
    });
  });

  describe("#createOriginCustomHeaders", () => {
    test("produces origin headers", () => {
      const app = new App();
      const stack = new Stack(app, "Stack");
      const headerName = "X-Foobar";
      const obj = new SecretHttpHeader(stack, "SecretHeader", {
        headerName,
      });
      const headers = obj.createOriginCustomHeaders();
      expect(headers).toStrictEqual({
        [headerName]: obj.headerValue.unsafeUnwrap(),
      });
    });
  });

  describe("#createListenerCondition", () => {
    test("produces a ListenerCondition", () => {
      const app = new App();
      const stack = new Stack(app, "Stack");
      const headerName = "X-Foobar";
      const obj = new SecretHttpHeader(stack, "SecretHeader", {
        headerName,
      });
      const condition = obj.createListenerCondition();
      expect(condition).toBeInstanceOf(ListenerCondition);
      const rawCondition = condition.renderRawCondition();
      expect(rawCondition).toStrictEqual({
        field: "http-header",
        httpHeaderConfig: {
          httpHeaderName: headerName,
          values: [obj.headerValue.unsafeUnwrap()],
        },
      });
    });
  });

  describe("#fromSecret", () => {
    test("behaves as expected", () => {
      const app = new App();
      const stack = new Stack(app, "Stack");
      const secret = new Secret(stack, "Secret", {
        description: "Custom header used to restrict load balancer access",
        generateSecretString: {
          excludePunctuation: false,
          includeSpace: false,
          generateStringKey: "value",
          excludeCharacters: `\`'"$\\`,
          secretStringTemplate: JSON.stringify({ name: "X-WhateverFooBar" }),
        },
      });
      const obj = SecretHttpHeader.fromSecret(stack, "SecretHeader", secret);
      expect(obj.headerValue).toStrictEqual(
        secret.secretValueFromJson("value")
      );
      const actualHeaderName = obj.headerName;
      const expectedHeaderName = secret
        .secretValueFromJson("name")
        .unsafeUnwrap();
      expect(stack.resolve(actualHeaderName)).toStrictEqual(
        stack.resolve(expectedHeaderName)
      );
    });
  });

  describe("#constructor", () => {
    test("synthesizes the custom resource as expected", () => {
      const app = new App();
      const stack = new Stack(app, "Stack");
      const headerName = "X-Foobar";
      new SecretHttpHeader(stack, "SecretHeader", {
        headerName,
      });
      const template = Template.fromStack(stack);
      template.hasResourceProperties("AWS::SecretsManager::Secret", {
        Description: "Custom header used to restrict load balancer access",
        GenerateSecretString: {
          ExcludeCharacters: "`'\"$\\",
          ExcludePunctuation: false,
          GenerateStringKey: "value",
          IncludeSpace: false,
          SecretStringTemplate: `{"name":"${headerName}"}`,
        },
      });
    });
  });
});
