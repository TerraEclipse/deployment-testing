# Deployment Testing

[ ![Codeship Status for TerraEclipse/deployment-testing](https://app.codeship.com/projects/807f6580-9fa9-0134-7dae-027848828b9f/status?branch=develop)](https://app.codeship.com/projects/189417)


Testing out codeship (and other CI/CD tools)


Codeship
--------

Codeship runs tests and initiates deployments when certain branches are pushed
to.


AWS
---

The servers are hosted on AWS EC2 (US-WEST-1)

### Setup

#### Create a VPC for this application.

Setup a VPC with the name `deployment-testing`.

#### Create an IAM policy for CodeDeploy

```
{
  "Version": "2012-10-17",
  "Statement" : [
    {
      "Effect" : "Allow",
      "Action" : [
        "autoscaling:*",
        "codedeploy:*",
        "ec2:*",
        "elasticloadbalancing:*",
        "iam:AddRoleToInstanceProfile",
        "iam:CreateInstanceProfile",
        "iam:CreateRole",
        "iam:DeleteInstanceProfile",
        "iam:DeleteRole",
        "iam:DeleteRolePolicy",
        "iam:GetInstanceProfile",
        "iam:GetRole",
        "iam:GetRolePolicy",
        "iam:ListInstanceProfilesForRole",
        "iam:ListRolePolicies",
        "iam:ListRoles",
        "iam:PassRole",
        "iam:PutRolePolicy",
        "iam:RemoveRoleFromInstanceProfile",
        "s3:*"
      ],
      "Resource" : "*"
    }
  ]
}
```

#### Create an IAM user for deployment.

Create IAM user with **programmatic access** and assign it the CodeDeploy policy.

#### Create an IAM role for deployment.

Create a new role with name `CodeDeployServiceRole` and type `AWS CodeDeploy`.

Attach the `AWSCodeDeployRole` policy.

Note the role ARN.

#### Create an app EC2 Instance

Create it on the VPC, with appropriate IAM role and whatnot.

#### Create an ELB

Create an application load balancer and assign the instance to it.



