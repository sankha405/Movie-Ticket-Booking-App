terraform {
  required_version = ">= 1.6.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }

  backend "s3" {
    bucket       = "movie-ticket-terraform-state-703621194250"
    key          = "movie-ticket/dev/terraform.tfstate"
    region       = "ap-south-1"
    use_lockfile = true
  }
}