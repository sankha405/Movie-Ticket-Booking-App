output "vpc_id" {
  description = "ID of the Movie Ticket VPC"
  value       = module.vpc.vpc_id
}

output "public_subnet_ids" {
  description = "IDs of the public subnets"
  value       = aws_subnet.public[*].id
}

output "private_subnet_ids" {
  description = "IDs of the private subnets"
  value       = aws_subnet.private[*].id
}

output "nat_gateway_id" {
  description = "ID of the NAT Gateway"
  value       = aws_nat_gateway.movie_ticket.id
}

output "internet_gateway_id" {
  description = "ID of the Internet Gateway"
  value       = aws_internet_gateway.movie_ticket.id
}

output "vpc_cidr" {
  description = "CIDR block of the Movie Ticket VPC"
  value       = module.vpc.vpc_cidr
}

output "available_azs" {
  description = "Availability Zones available in the AWS region"
  value       = data.aws_availability_zones.available.names
}